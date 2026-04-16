const db = require("./db");

const saveScan = async (username, dateRange, bannedPlayers) => {
    const scan = await db.scan.create({
        data: { username, dateRange },
    });

    for (const player of bannedPlayers) {
        const bannedPlayer = await db.bannedPlayer.upsert({
            where: { username: player.username },
            update: {},
            create: {
                username: player.username,
                profileUrl: player.profileUrl,
            },
        });

        await db.scanResult.create({
            data: {
                scanId: scan.id,
                bannedPlayerId: bannedPlayer.id,
                games: player.lostGames,
            },
        });
    }
};

const getAllBannedPlayers = async () => {
    const players = await db.bannedPlayer.findMany({
        include: { results: true },
        orderBy: { firstDetected: "desc" },
    });

    return players.map(p => ({
        username: p.username,
        profileUrl: p.profileUrl,
        firstDetected: p.firstDetected,
        timesCaught: p.results.length,
    }));
};

const getPlayerHistory = async (username) => {
    const scans = await db.scan.findMany({
        where: { username: { equals: username, mode: "insensitive" } },
        include: {
            results: {
                include: { bannedPlayer: true },
            },
        },
        orderBy: { scannedAt: "desc" },
    });

    return scans.map(scan => ({
        dateRange: scan.dateRange,
        scannedAt: scan.scannedAt,
        bannedPlayers: scan.results.map(r => ({
            username: r.bannedPlayer.username,
            profileUrl: r.bannedPlayer.profileUrl,
            games: r.games,
        })),
    }));
};

module.exports = { saveScan, getAllBannedPlayers, getPlayerHistory };

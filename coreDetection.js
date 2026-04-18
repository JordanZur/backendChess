const axios = require("axios");
const fs = require("fs");
const { saveScan } = require("./dbService");

const headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.chess.com",
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function generateResultFilename(username) {
    return `detection-result-${username.replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
}

const getArchivesInRange = async (username, input) => {
    const { data } = await axios.get(`https://api.chess.com/pub/player/${username}/games/archives`);
    const archives = data.archives;
    if (!input.includes("-")) return archives.filter(url => url.includes(input));
    const [start, end] = input.split("-");
    return archives.filter(url => {
        const date = url.split("/").slice(-2).join("/");
        return date >= start && date <= end;
    });
};

const extractLostGameOpponents = (games, myUsername) => {
    const lostMap = new Map();
    const me = myUsername.toLowerCase();

    for (const game of games) {
        const white = game.white?.username?.toLowerCase();
        const black = game.black?.username?.toLowerCase();
        const url = game.url;
        const timestamp = game.end_time;

        if (!white || !black || !url) continue;

        let myResult = null;
        let opponent = null;
        let myColor = null;

        if (white === me) {
            myResult = game.white?.result?.toLowerCase();
            opponent = game.black?.username;
            myColor = "white";
        } else if (black === me) {
            myResult = game.black?.result?.toLowerCase();
            opponent = game.white?.username;
            myColor = "black";
        } else {
            continue;
        }

        if (!myResult || !opponent) continue;

        const isLoss = !["win", "draw", "agreed", "stalemate"].includes(myResult);
        if (isLoss) {
            const opponentUsername = opponent.toLowerCase();
            if (!lostMap.has(opponentUsername)) lostMap.set(opponentUsername, []);
            lostMap.get(opponentUsername).push({ url, dateLost: timestamp, myColor });
        }
    }

    return Array.from(lostMap.entries()).map(([username, lostGames]) => ({
        username,
        url: `https://www.chess.com/member/${username}`,
        lostGameLinks: lostGames,
    }));
};

const checkProfile = async (url, profileMap) => {
    try {
        const username = url.split("/").pop();
        const { data } = await axios.get(`https://api.chess.com/pub/player/${username}`, { headers });

        const isBanned = data.status === "closed:fair_play_violations";
        if (!isBanned) return null;

        const opponent = profileMap.get(url);
        if (opponent) {
            return {
                username: opponent.username,
                profileUrl: opponent.url,
                lostGames: opponent.lostGameLinks,
            };
        }
    } catch (err) {
        console.error(`Failed to check ${url}:`, err.message);
        return null;
    }
};

const fetchRatingChange = async (gameUrl, myColor) => {
    try {
        const gameId = gameUrl.split("/").pop();
        const { data } = await axios.get(
            `https://www.chess.com/callback/live/game/${gameId}`,
            { headers }
        );
        const change = myColor === "white" ? data.game.ratingChangeWhite : data.game.ratingChangeBlack;
        return typeof change === "number" ? change : null;
    } catch {
        return null;
    }
};

const verifyUserExists = async (username) => {
    try {
        await axios.get(`https://api.chess.com/pub/player/${username}`, { headers });
    } catch (err) {
        if (err.response?.status === 404 || err.response?.status === 301) {
            const notFound = new Error(`User "${username}" doesn't exist on chess.com`);
            notFound.code = 'USER_NOT_FOUND';
            throw notFound;
        }
        throw err;
    }
};

const runCheaterDetection = async (username, dateRange) => {
    await verifyUserExists(username);

    const archiveUrls = await getArchivesInRange(username, dateRange);
    let allGames = [];
    for (const url of archiveUrls) {
        const { data } = await axios.get(url);
        allGames.push(...(data.games || []));
    }

    const lostOpponents = extractLostGameOpponents(allGames, username);
    const profileMap = new Map(lostOpponents.map(op => [op.url, op]));
    const profilesToCheck = lostOpponents.map(op => op.url);

    const bannedPlayers = [];

    let batch = [];
    for (const url of profilesToCheck) {
        batch.push(checkProfile(url, profileMap));

        if (batch.length === 50) {
            const results = await Promise.all(batch);
            bannedPlayers.push(...results.filter(Boolean));
            await delay(800);
            batch = [];
        }
    }

    const lastResults = await Promise.all(batch);
    bannedPlayers.push(...lastResults.filter(Boolean));

    for (const player of bannedPlayers) {
        const gameBatch = [];
        for (const game of player.lostGames) {
            gameBatch.push(
                fetchRatingChange(game.url, game.myColor).then(change => {
                    game.ratingChange = change;
                })
            );
            if (gameBatch.length === 5) {
                await Promise.all(gameBatch);
                await delay(500);
                gameBatch.length = 0;
            }
        }
        if (gameBatch.length > 0) await Promise.all(gameBatch);
    }

    const resultData = {
        lostToCount: lostOpponents.length,
        bannedPlayers,
    };

    fs.writeFileSync(generateResultFilename(username), JSON.stringify(resultData, null, 2), "utf8");

    saveScan(username, dateRange, bannedPlayers).catch(err =>
        console.error("DB save failed:", err.message)
    );

    return resultData;
};

module.exports = {
    runCheaterDetection,
    getArchivesInRange,
    delay,
};

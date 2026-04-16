const { runCheaterDetection } = require("./coreDetection");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

// Ask user input
const askQuestion = (q) =>
    new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(q, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });

const runTerminalApp = async () => {
    const username = await askQuestion(" Enter your Chess.com username: ");
    const dateRange = await askQuestion(" Enter month (YYYY/MM) or range (YYYY/MM-YYYY/MM): ");

    console.log("\n🔎 Running cheat detection...\n");
    await runCheaterDetection(username, dateRange);

    const resultPath = path.join(__dirname, `detection-result-${username}.json`);
    if (!fs.existsSync(resultPath)) {
        console.error(` Detection failed. No result file found.`);
        return;
    }

    const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));

    console.log(`\n You lost to ${result.lostToCount} opponents.`);
    console.log(` Found ${result.bannedPlayers.length} banned players:\n`);

    for (const player of result.bannedPlayers) {
        console.log(` ${player.username}`);
        for (const game of player.lostGames) {
            const readableDate = new Date(game.dateLost * 1000).toLocaleDateString();
            console.log(`   🔗 ${game.url} (on ${readableDate})`);
        }
        console.log();
    }

    // 💥 Delete result file after use
    try {
        fs.unlinkSync(resultPath);
        console.log(` Deleted result file: detection-result-${username}.json`);
    } catch (err) {
        console.error(` Failed to delete result file: ${err.message}`);
    }

    console.log(" Done.");
};

runTerminalApp().catch((err) => {
    console.error(" Fatal error:", err.message);
    console.error(err.stack);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const fs = require("fs");
const path = require("path");
const { runCheaterDetection } = require("./coreDetection");

const app = express();
const PORT = process.env.PORT;

// Security: Helmet - sets various HTTP headers
app.use(helmet());

// Security: Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply rate limiting to all requests
app.use(limiter);

// Stricter rate limit for /api/scan endpoint
const scanLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 3, // Limit to 3 scans per minute per IP
    message: "Too many scan requests, please wait before scanning again.",
    skipSuccessfulRequests: false,
});

// CORS - Allow all origins for now
app.use(cors());
console.log(`✅ CORS enabled for all origins`);

app.use(bodyParser.json({ limit: "1mb" }));

// Input validation helper
const validateScanInput = (username, dateRange) => {
    // Username validation: alphanumeric, underscore, dash only, max 25 chars
    if (!username || typeof username !== 'string') {
        return { valid: false, error: "Username is required" };
    }
    if (!/^[a-zA-Z0-9_-]{1,25}$/.test(username)) {
        return { valid: false, error: "Invalid username format" };
    }

    // Date range validation: format YYYY/MM-YYYY/MM
    if (!dateRange || typeof dateRange !== 'string') {
        return { valid: false, error: "Date range is required" };
    }
    if (!/^\d{4}\/\d{2}-\d{4}\/\d{2}$/.test(dateRange)) {
        return { valid: false, error: "Invalid date range format" };
    }

    return { valid: true };
};

app.post("/api/scan", scanLimiter, async (req, res) => {
    const { username, dateRange } = req.body;

    // Input validation
    const validation = validateScanInput(username, dateRange);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.error });
    }

    try {
        const result = await runCheaterDetection(username, dateRange);
        res.json(result);

        // Prepare path to result file
        const resultFilename = `detection-result-${username}.json`;
        const resultPath = path.join(__dirname, resultFilename);

        // Delay and delete the file after response
        setTimeout(() => {
            if (fs.existsSync(resultPath)) {
                fs.unlink(resultPath, (err) => {
                    if (err) {
                        console.error(` Failed to delete ${resultFilename}:`, err.message);
                    } else {
                        console.log(`🧹 Deleted ${resultFilename}`);
                    }
                });
            }
        }, 1000);

    } catch (err) {
        console.error(" Scan failed:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});

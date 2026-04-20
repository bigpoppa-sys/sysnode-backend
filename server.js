const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Load services (timed background workers)
require("./services/sysMain");
require("./services/masternodeTracker");

// Load routes
const mnStatsRoute = require("./routes/mnStats");
const masternodesRoute = require("./routes/masternodes");
const governanceRoute = require("./routes/governance");
const csvParserRoute = require("./routes/csvParser");
const mnListRoute = require("./routes/mnList");
const mnSearchRoute = require("./routes/mnSearch");
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*", optionsSuccessStatus: 200 }));
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).send({ status: "ok" });
});

// Bind routes
app.use(mnStatsRoute);
app.use(masternodesRoute);
app.use(governanceRoute);
app.use(csvParserRoute);
app.use(mnListRoute);
app.use(mnSearchRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Sysnode backend running on port ${PORT}`);
});

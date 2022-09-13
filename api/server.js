const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("./routers/auth/auth");
const portalRouter = require("./routers/portal/portal");
//======end of imports ============

//initializing the server utils====
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

//initializing the router =========
server.use("/api/auth", authRouter);
server.use("/api/portal", portalRouter);

server.use("*", (req, res) => {
  res.send("<h1>server is up, but end point is invalid</h1>");
});

//global error handling middleware
//eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: "There was an error",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;

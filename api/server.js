const express = require('express');
const server = express();

const actionsRouter = require("./actions/actions-router")
const projectsRouter = require("./projects/projects-router")

// Configure your server here
server.use(express.json())

// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js

server.use("/api/projects", projectsRouter)
server.use("/api/actions", actionsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

// Do NOT `server.listen()` inside this file!

module.exports = server;

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const port = 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

const express = require('express');
const path = require('path');

server.use(express.static(path.join(__dirname, 'build')));
server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.use(router);
server.listen(port, () => {
  console.log(`Server is running on ${port} `);
});

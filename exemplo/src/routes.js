const express = require("express");
const { join } = require("path");

const routes = express.Router();

routes.get("/api/names", function (request, response) {
  return response.json(["Acacio de Lima", "Joe Doe", "Fulano"]);
});

routes.get("*", function (request, response) {
  response.sendFile(join(__dirname, "public", "index.html"));
});

module.exports = routes;
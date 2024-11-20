const express = require("express");

const api = express();

api.use("/todo", require("./todo/routes"));

module.exports = api;

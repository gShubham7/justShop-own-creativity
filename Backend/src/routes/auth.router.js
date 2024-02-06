const express = require("express");
const app = express.Router();
const { login, register } = require("../controllers/auth.controller");

app.post("/login", login);

app.post("/signup", register);

module.exports = app;

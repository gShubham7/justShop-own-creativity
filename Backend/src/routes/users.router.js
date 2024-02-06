const express = require("express");
const app = express.Router();
const { getUsers } = require("../controllers/user.controller");

app.get("/", getUsers);

module.exports = app;

// {
//   token:"sufi@gmail.com#123456",
//   cartData:[{},{}]
// }

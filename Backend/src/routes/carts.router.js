const express = require("express");
const Carts = require("../models/carts.model");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let data = await Carts.find();

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

module.exports = app;

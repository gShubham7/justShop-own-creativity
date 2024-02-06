const Users = require("../models/users.model");

const getUsers = async (req, res) => {
  try {
    let data = await Users.find();

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
};

module.exports = { getUsers };

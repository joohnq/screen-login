const express = require("express");
const routes = express.Router();
const User = require("./database/models/User");

routes.get("/users", async (req, res) => {
  const users = await User.find({});

  if (users == "") {
    return res.status(404).json({ msg: "Não há usuários no banco de dados" });
  }

  if (users == null || users == undefined) {
    return res
      .status(500)
      .json({ msg: "ERROR | Ocorreu um erro no banco de dados" });
  }

  return res.status(404).json(users);
});

routes.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  const userCreated = await User.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(200).json(userCreated);
});

routes.delete("users/:id", async (req, res) => {
  const id = req.params.id;

  const userDeleted = await User.findByIdAndDelete(id);
  console.log(userDeleted);
  res.status(400).json(userDeleted);
});

module.exports = routes;

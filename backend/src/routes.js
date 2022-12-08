const express = require("express");
const routes = express.Router();
const User = require("./database/models/User");

routes.get("/users", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
});

routes.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res.status(404).json({ msg: "Complete todos os campos" });
    } else if (!name) {
      return res.status(404).json({ msg: "Complete o campo de Nome" });
    } else if (!email) {
      return res.status(404).json({ msg: "Complete o campo de EMAIL" });
    } else if (!password) {
      return res.status(404).json({ msg: "Complete o campo de SENHA" });
    } else {
      const userCreated = await User.create({
        name: name,
        email: email,
        password: password,
      });

      res.status(200).json(userCreated);
    }
  } catch (error) {
    console.log(error);
  }
});

routes.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userDeleted = await User.findByIdAndDelete(id);
    res.status(400).json(userDeleted);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;

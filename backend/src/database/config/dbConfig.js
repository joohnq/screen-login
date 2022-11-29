const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DATABASE_LOGIN = process.env.DATABASE_LOGIN;
const DATABASE_PASS = process.env.DATABASE_PASS;

mongoose.connect(
  `mongodb+srv://${DATABASE_LOGIN}:${DATABASE_PASS}@cluster0.b2orttf.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    console.log("Conexão com banco de dados feita com sucesso")
}).catch(error => {
    console.log("Erro no banco de dados", error)
})
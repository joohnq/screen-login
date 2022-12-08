const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
require("./database/config/dbConfig");

app.use(express.json())
app.use(routes);

app.get("/", (req, res) => res.json({ msg: "Home" }));
app.listen(port, () => console.log(`Rodando na porta: ${port}!`));

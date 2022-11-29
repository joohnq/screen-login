const express = require("express");
const app = express();
const port = 3000;
require('./database/config/dbConfig')

app.get("/", (req, res) => res.json({ msg: "Success" }));
app.listen(port, () => console.log(`Rodando na porta: ${port}!`));

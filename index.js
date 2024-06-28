const express = require("express");

const app = express();

require("dotenv").config();
const path = require("path")
const port = process.env.PORT || 3009;

const router = require("./src/routes/main.routes");
const expressEjsLayouts = require("express-ejs-layouts");

app.use(express.static("public"))

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"))

app.use(expressEjsLayouts)
app.set("layout", "./layouts/main");

app.use("/", router);


app.listen(port, () => console.log(`Ejecutando http://localhost:${port}`));
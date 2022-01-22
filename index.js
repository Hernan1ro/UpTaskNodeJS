const express = require("express");
const routes = require("./routes");

// Instanciar la aplicación

const app = express();

const productos = [
  { producto: "Libro", precio: 20 },
  { producto: "Computadora", precio: 10000 },
];

app.use("/", routes());

app.listen(3000);

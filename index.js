const express = require("express");

// Instanciar la aplicación

const app = express();

const productos = [
  { producto: "Libro", precio: 20 },
  { producto: "Computadora", precio: 10000 },
];

//  Ruta para el home
app.use("/", (req, res, next) => {
  res.json(productos);
});

app.listen(3000);

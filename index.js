const express = require("express");

// Instanciar la aplicación

const app = express();

//  Ruta para el home
app.use("/", (req, res, next) => {
  res.send("Hola");
});

app.listen(3000);

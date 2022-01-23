const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

// Crear la conexión a la BD

const db = require("./config/db.js");

// Importar el modelo
require("./models/Proyectos.js");
// Sync crea la BD table automaticamente
db.sync()
  .then(() => console.log("Conectado al servidor"))
  .catch((error) => console.log(error));

// Instanciar la aplicación

const app = express();
// Donde cargar los archivos estaticos
app.use(express.static("public"));

// Habilitar pug
app.set("view engine", "pug");

// Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(3000);

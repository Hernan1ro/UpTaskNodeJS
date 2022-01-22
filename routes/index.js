const express = require("express");
const router = express.Router();

// Importar el controlador
const proyectoController = require("../controllers/proyectosController.js");

module.exports = function () {
  router.get("/", proyectoController.proyectosHome);

  return router;
};

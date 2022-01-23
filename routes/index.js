const express = require("express");
const router = express.Router();

// Importar express validator
const { body } = require("express-validator/check");

// Importar el controlador
const proyectoController = require("../controllers/proyectosController.js");

module.exports = function () {
  router.get("/", proyectoController.proyectosHome);
  router.get("/nuevo-proyecto", proyectoController.formularioProyecto);
  router.post(
    "/nuevo-proyecto",
    body("nombre").not().isEmpty().trim().escape(),
    proyectoController.nuevoProyecto
  );

  return router;
};

const express = require("express");

const router = express.Router();

module.exports = function () {
  router.get("/", (req, res, next) => {
    res.send("Desde Inicio");
  });

  router.get("/nosotros", (req, res, next) => {
    res.send("Desde nosotros");
  });

  return router;
};

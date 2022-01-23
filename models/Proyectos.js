const Sequelize = require("sequelize");
const slug = require("slug");
const db = require("../config/db.js");

const Proyectos = db.define(
  "proyectos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: Sequelize.STRING,
    url: Sequelize.STRING,
  },
  {
    hooks: {
      beforeCreate(proyecto) {
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url = url;
      },
    },
  }
);

module.exports = Proyectos;

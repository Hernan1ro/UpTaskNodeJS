const Proyectos = require("../models/Proyectos.js");
const slug = require("slug");

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  res.render("index", {
    nombrePagina: "Proyectos",
    proyectos,
  });
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo proyecto",
    proyectos,
  });
};

exports.nuevoProyecto = async (req, res) => {
  // Enviar a la consola lo que el usuario escriba

  // Validar lo que se tenga en el input
  const { nombre } = req.body;
  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un Nombre al proyecto" });
  }
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo proyecto",
      errores,
    });
  } else {
    //No hay errores
    //Insertar en la BD
    try {
      const proyecto = await Proyectos.create({ nombre });
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  }
};

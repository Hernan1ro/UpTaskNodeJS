const Proyectos = require("../models/Proyectos.js");

exports.proyectosHome = (req, res) => {
  res.render("index", {
    nombrePagina: "Proyectos",
  });
};

exports.formularioProyecto = (req, res) => {
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo proyecto",
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

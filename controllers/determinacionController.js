const Referencia = require("../models/Determinacion");
const controllerReferencia = {};

controllerReferencia.alta = async (req, res, next) => {
    await Referencia.sync();
    const createReferencia = await Referencia.create({
      edadMin: req.body.edadMin,
      edadMax: req.body.edadMax,
      sexo: req.body.sexo,
      embarazo: req.body.embarazo,
      valMin: req.body.valMin,
      valMax: req.body.valMax,
      idDeterminacion: req.body.idDeterminacion,
    });
    res.render("pages/cargaReferencia");
    next();
  }

  module.exports = controllerReferencia;
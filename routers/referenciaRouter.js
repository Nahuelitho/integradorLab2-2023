const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a examenes
const Referencia = require('../models/Referencia');

//carga formulario de referencia vacio
router.get("/", (req, res, next) => {
    res.render("pages/cargaReferencia");
    next();
  });
  
  router.get("/buscar", (req, res, next) => {
    res.render("pages/referenciaBuscar");
    next();
  });

//busca una referencia por Id
router.post("/buscar/", async (req, res, next) => {
    const referenciaId = req.body.referenciaId;
    const referencia = await Referencia.findOne({ where: {id: referenciaId}});
    res.render("pages/referenciaBuscar", {referencia: referencia});
    next();
  });

//alta referencia en bd con creacion de tabla de ser necesario
router.post("/", async (req, res, next) => {
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
  });

  router.put("/Actualizar", async(req, res, next) => {
    const referenciaId = req.body.referenciaId;
    const body = req.body;
    const actualizarReferencia = await Referencia.update({
        edadMin: body.edadMin,
        edadMax: body.edadMax,
        sexo: body.sexo,
        embarazo: body.embarazo,
        valMin: body.valMin,
        valMax: body.valMax,
        idDeterminacion: body.idDeterminacion,
        estado: body.estado,
    },
    { where: {id: referenciaId}}
    );
    res.render("pages/cargaReferencia");
    next();
  });
  
  module.exports = router;
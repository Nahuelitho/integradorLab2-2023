const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a determinaciones
const Determinacion = require('../models/Determinacion');

//carga formulario de determinacion vacio
router.get("/", (req, res, next) => {
    res.render("pages/determinacion");
    next();
  });

router.get("/buscar", (req, res, next) => {
    res.render("pages/determinacionBuscar");
    next();
});

//busca una determinacion por Id
router.post("/determinacionBuscar/", async (req, res, next) => {
    const id = req.body.id;
    const determinacion = await Determinacion.findOne({ where: {id: id}});
    res.render("pages/", {determinacion: determinacion});
    next();
  });

//alta determinacion en bd con creacion de tabla de ser necesario
router.post("/", async (req, res, next) => {
    await Determinacion.sync();
    const createDeterminacion = await Determinacion.create({
      cantidad: req.body.cantidad,
      medida: req.body.medida,
      idResultado: req.body.idResultado,
      idReferencia: req.body.idReferencia,
      idExamen: req.body.idExamen,
    });
    res.status(200).send({message: 'Determinacion creada con exito!!!'})
    next();
  });

  module.exports = router;
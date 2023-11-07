const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir muestras
const Muestra = require('../models/Muestra');

//carga formulario de muestra vacio
router.get("/", (req, res, next) => {
    res.render("pages/cargaMuestra");
    next();
  }); 
  
  router.get("/buscar", (req, res, next) => { 
    res.render("pages/muestraBuscar");
    next();
  });

  //busca una muestra por Id
  router.post("/buscar/",async (req, res, next) => {
    const muestraId = req.body.muestraId;
    const muestra = await Muestra.findOne({where: { muestraId: muestraId } });
    res.render("pages/muestraBuscar", {muestra: muestra});
    next();
    });

  //alta muestra en bd con creacion de tabla de ser necesario
  router.post("/", async(req, res, next) => {
    await Muestra.sync();
    const createMuestra = await Muestra.create({
        pacienteId: req.body.pacienteId,
        fechaHorarecoleccion: req.body.fechaHorarecoleccion,
        estado: req.body.estado,
    });
    res.render("pages/cargaMuestra");
    next();
  });

  //Actualizar muestra
  router.put("/actualizar", async(req, res, next) => {
    const muestraId = req.body.id;
    const body = req.body;
    const actualizarMuestra = await Muestra.update({
      pacienteId: body.muestraId,
      fechaHorarecoleccion: body.fechaHorarecoleccion,
      estado: body.estado,
    },
    {where: {id: muestraId}});
    res.render("pages/cargaMuestra");
  })
  module.exports = router;
const router = require("express").Router();
//ruteador para requerir a personas
const Muestra = require('../models/Muestra');

router.get("/", (req, res, next) => {
    res.render("pages/");
    next();
  }); 
  
  router.get("/buscar", (req, res, next) => {  //fijarse que ruta poner aca
    res.render("pages/index");
    next();
  });

  router.post("/buscar/",async (req, res) => {
    const muestraId = req.body.muestraId;
    var muestra = await Muestra.findAll({where: { muestraId: muestra } });
    res.status(200).json({
      ok: true,
      status: 200,
      body: persona,
     
    });
    console.log(muestra)
    res.send();
  });

  router.post("/", async(req, res) => {
    await Muestra.sync();
    const createMuestra = await Muestra.create({
        pacienteId: req.body.pacienteId,
        fechaHorarecoleccion: req.body.fechaHorarecoleccion
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Muestra creada",
      });
  });

  module.exports = router;
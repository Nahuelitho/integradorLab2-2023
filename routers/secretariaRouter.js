const router = require("express").Router();
//ruteador para requerir secretarias

const Secretaria = require('../models/Secretaria');

//metodos de secretaria:

//obtener todas las secretarias.
router.get("/", async (req, res) => {
  const secretarias = await Secretaria.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: secretarias
  });
});
//alta secretaria en bd con creacion de tabla de ser necesario
router.post("/", async (req, res) => {
  await Secretaria.sync();
  const createSecretaria = await Secretaria.create({
    titulo: req.body.titulo,
    fechaIngresoInstitucion: req.body.fechaIngresoInstitucion
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Secretaria creada",
  });
});

/* router.post("/", async (req, res)=>{
  await 
}) */

module.exports = router;
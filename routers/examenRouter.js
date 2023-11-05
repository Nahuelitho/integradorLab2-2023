const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a examenes
const Examen = require('../models/Examen');

//carga formulario de examenes vacio
router.get("/", (req, res, next) => {
  res.render("pages/cargaExamen");
  next();
});

router.get("/buscar", (req, res, next) => {
  res.render("pages/resExamen");
  next();
});

//busca un examen por examenId
router.post("/buscar/", async (req, res, next) => {
  const examenId = req.body.examenId;
  const examen = await Examen.findOne({ where: {id: examenId}});
  res.render("pages/resExamen", {examen: examen});
  next();
});

//alta examen en bd con creacion de tabla de ser necesario
router.post("/", async (req, res, next) => {
  await Examen.sync();
  const createExamen = await Examen.create({
    muestraId: req.body.muestraId,
    nombre: req.body.nombre,
    fechaEntregaResultado: req.body.fechaEntregaResultado,
  });
  res.status(200).send({message: 'Examen creado con exito!!!'})
  next();
});

router.put("/Actualizar", async(req, res, next) => {
  const examenId = req.body.examenId;
  const body = req.body;
  const actualizarExamen = await Examen.update({
    muestraId: body.muestraId,
    nombre: body.nombre,
    fechaEntregaResultado: body.fechaEntregaResultado,
  },
  { where: {id: examenId}}
  );
   res.status(200).json({
    ok: true,
    message: 'examen actualizado'
  });
  next();
});

module.exports = router;
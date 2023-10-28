const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a examenes
const path = require("path");
const { send } = require("process");
const dir = path.resolve(path.join("src", "model", "examen.model"));
const Examen = require(dir);

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
  const examen = await Examen.findOne({ where: {examenId: examenId}});
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
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Examen creado",
  });
  next();
});

module.exports = router;
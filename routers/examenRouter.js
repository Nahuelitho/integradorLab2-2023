const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a examenes
const Examen = require('../models/Examen');
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const examenController = require('../controllers/examenController');
//carga formulario de examenes vacio examenes/crear
router.get("/crear", examenController.formExamen);
router.post("/crear", examenController.altaExamen);

//busca un examen por examenId
router.post("/buscar/", async (req, res, next) => {
  const examenId = req.body.examenId;
  const examen = await Examen.findOne({ where: {id: examenId}});
  res.render("pages/listadoExamen", {examen: examen});
  next();
});

//lista todos los examenes en la tabla
router.get("/", examenController.obtenerExamenes);

router.get("/Actualizar/:id", examenController.BuscarXId);
router.post("/Actualizar/:id", async(req, res, next) => {
  const examenId = req.params.id;
  const data = req.body;
  const examenAActualizar = await Examen.findOne({where: {examenId: id}});
  await Examen.update({
    nombre: body.nombre,
    valRefHombreD: body.valRefHombreD,
    valRefHombreH: body.valRefHombreH,
    valRefMujerD: body.valRefMujerD,
    valRefMujerH: body.valRefMujerH,
    valRefNinioD: body.valRefNinioD,
    valRefNinioH: body.valRefNinioH,
    estado: body.estado,
  },
  { where: {id: examenId}}
  );
  res.render("pages/detalleExamen");
  next();
});

module.exports = router;
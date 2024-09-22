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
//obtiene y muestra el examen a actualizar
router.get("/actualizar/:id", examenController.BuscarXId);

//guarda el examen editado
router.post("/actualizar/:id", examenController.EditarExamen); 

module.exports = router;
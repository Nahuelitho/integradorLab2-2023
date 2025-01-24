const router = require("express").Router();
const { json } = require("express");

const Tecnico = require('../models/Tecnico');
//ruteador para requerir a personas

const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const tecnicoController = require('../controllers/tecnicoController');

router.get("/", tecnicoController.mostrarTecnicos);

router.get("/crear", tecnicoController.formTecnico);
router.post("/crear", tecnicoController.alta);

//obtiene y muestra el tecnico a actualizar
router.get("/actualizar/:dni", tecnicoController.mostrarTecnico);

//tecnico/actualizar url ejecuta la actualizacion por DNI
router.post("/actualizar/:dni", tecnicoController.editarTecnico);

// hace borrado logico~ pasa el estado de true a false./
router.post("/borrar/:dni", tecnicoController.eliminarTecnico);

module.exports = router;
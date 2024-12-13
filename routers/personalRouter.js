const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas

const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const secretariaController = require("../controllers/secretariaController");
//const bioquimicoController = require("../controllers/bioquimicoController");
//const tecnicoController = require("../controllers/tecnicoController");



//lista de personal
router.get("/secretaria", secretariaController.mostrarSecretarias );
//router.get("/bioquimico", bioquimicoController.mostrarBioquimicos );
//router.get("/tecnico", tecnicoController.mostrarTecnicos);
///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.get("/crearSecretaria", secretariaController.formSecretaria);
router.post("/crearSecretaria", secretariaController.alta);

module.exports = router;
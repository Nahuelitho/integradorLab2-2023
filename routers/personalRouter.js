const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas

const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const secretariaController = require("../controllers/secretariaController");
const bioquimicoController = require("../controllers/bioquimicoController");
//const tecnicoController = require("../controllers/tecnicoController");

//lista de personal muestra por defecto las secretarias
router.get("/secretaria", secretariaController.mostrarSecretarias);
router.get("/bioquimico", bioquimicoController.mostrarBioquimicos);
//router.get("/tecnico", tecnicoController.mostrarTecnicos);
// alta de secretaria
router.get("/secretaria/crearSecretaria", secretariaController.formSecretaria);
router.post("/secretaria/crearSecretaria", secretariaController.alta);
//alta de Bioquimico
router.get("/bioquimico/crearBioquimico", bioquimicoController.formBioquimico);
router.post("/bioquimico/crearBioquimico", bioquimicoController.alta);

module.exports = router;
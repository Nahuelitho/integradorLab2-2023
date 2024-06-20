const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas

const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const pacienteController = require('../controllers/paciente.controller');
//metodos de Paciente
//lista todos los pacientes en una tabla
// http://localhost:3000/pacientes
router.get("/", pacienteController.mostrarPacientes);
// error al encontrar usuario o mail tambien intenta encontrar una persona con el dni ingresado. 
///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.get("/crear", pacienteController.formPaciente);
router.post("/crear", pacienteController.alta);

//obtiene y muestra el paciente a actualizar
router.get("/actualizar/:dni", pacienteController.mostrarPaciente);

//pacientes/actualizar url ejecuta la actualizacion por DNI
router.post("/actualizar/:dni", pacienteController.editarPaciente);

// hace borrado logico~ pasa el estado de true a false./
router.post("/borrar/:dni", pacienteController.eliminarPaciente);

module.exports = router;

// 3000:/persona/buscar/   solo a modo ejemplo esto lo hace la tabla
/* router.post("/buscar", async (req, res) => {
  const dni = req.body.dniBuscar;
  const personaEditable = await Persona.findOne({ where: { dni: dni } });

  res.render("pages/tablaPacientes", { persona: personaEditable });
}); */

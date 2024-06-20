const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require("../models/Persona");
const Paciente = require("../models/Paciente");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const pacienteController = require('../controllers/paciente.controller');
//metodos de Paciente
//lista todos los pacientes en una tabla
router.get("/", pacienteController.mostrarPacientes);
// error al encontrar usuario o mail tambien intenta encontrar una persona con el dni ingresado. 
///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.post("/", pacienteController.crearPaciente);

//obtiene y muestra el paciente a actualizar
router.get("/actualizar/:dni", pacienteController.mostrarPaciente);

//persona/actualizar url ejecuta la actualizacion por DNI
router.post("/actualizar/:dni", async (req, res, next) => { //el boton Guardar del Formulario Actualizar
  const dni = req.params.dni;
  const data = req.body;
  const persona = await Persona.findOne({ where: { dni: dni } });
  await Persona.update(
    {
      nombre: data.nombre,
      apellido: data.apellido,
      dni: data.dni,
      telefono: data.telefono,
      email: data.email,
      fechaNacimiento: data.fechaNacimiento,
      sexo: data.sexo,
      domicilio: data.domicilio,
      provincia: data.provincia,
      localidad: data.localidad,
      obraSocial: data.obraSocial,
      numeroAfiliado: data.numeroAfiliado,
      estado: true,
      user: data.user,
      password: data.password,
    },
    {
      where: { dni: dni },
    }
  );
  await Paciente.update(
    {
      embarazada: data.embar,
      estado: true
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/paciente/pacientes");
  next();
});
// hace borrado logico~ pasa el estado de true a false./
router.post("/borrar/:dni", pacienteController.eliminarPaciente);

module.exports = router;

// 3000:/persona/buscar/   solo a modo ejemplo esto lo hace la tabla
/* router.post("/buscar", async (req, res) => {
  const dni = req.body.dniBuscar;
  const personaEditable = await Persona.findOne({ where: { dni: dni } });

  res.render("pages/tablaPacientes", { persona: personaEditable });
}); */

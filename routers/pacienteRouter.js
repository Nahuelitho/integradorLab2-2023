const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require("../models/Persona");
const Paciente = require("../models/Paciente");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const pacienteController = require('../controllers/paciente.controller')
//metodos de Paciente
router.get("/", pacienteController.crearPaciente);
// error al encontrar usuario o mail tambien intenta encontrar una persona con el dni ingresado. 
///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.post("/", async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 5);
  const personas = await Persona.findAll();
  var dniPersonas = [];
  var emailPersonas = [];
  var usersPersonas = [];
  let datosPersona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    telefono: req.body.telefono,
    email: req.body.email,
    sexo: req.body.sexo,
    fechaNacimiento: req.body.fechaNacimiento,
    domicilio: req.body.domicilio,
    provincia: req.body.provincia,
    localidad: req.body.localidad,
    obraSocial: req.body.obraSocial,
    numeroAfiliado: req.body.numeroAfiliado,
    estado: true,
    user: req.body.user,
    password: hashedPassword
  };
  personas.forEach(function (perso) {
    dniPersonas.push(perso.dni);
    emailPersonas.push(perso.email);
    usersPersonas.push(perso.user);
  });
  if ((!dniPersonas.includes(req.body.dni))&&(!emailPersonas.includes(req.body.email))&&(!usersPersonas.includes(req.body.user))){
    
    const persona = await Persona.create(datosPersona);
    const paciente = await Paciente.create({
      idPersona: persona.id,
      embarazada: req.body.embarazada,
      estado:true
    });
    res.redirect('/paciente/pacientes')
    
    
  } else {
    const personaEncontrada = await Persona.findOne({where: {dni : req.body.dni}})
    const pacienteEncontrado = await Paciente.findOne({where: {idPersona : personaEncontrada.id }})
    if(personaEncontrada.estado == 0 || pacienteEncontrado.estado == 0){
      await Persona.update(datosPersona, {where:{dni: personaEncontrada.dni}});
      await Paciente.update({
          embarazada: req.body.embarazada,
          estado:true
        }, 
        {where: {idPersona: personaEncontrada.id}
      })
      res.redirect('/paciente/pacientes')
    }
    else{
      res.send('<h1>Persona ya existente</h1>')
    }
  }

  next();
});

//lista todos los pacientes en una tabla persona/pacientes
router.get("/pacientes", pacienteController.mostrarPacientes);
//obtiene y muestra el paciente a actualizar
router.get("/actualizar/:dni", async (req, res, next) => {
  const dni = req.params.dni;
  const persona = await Persona.findOne({ where: { dni: dni } });
  const paciente = await Paciente.findOne({ where: { idPersona: persona.id } });
  res.render("pages/pacienteFormulario", {
    persona: persona,
    paciente: paciente,
  });
  next();
});

//persona/actualizar url ejecuta la actualizacion por DNI
router.post("/actualizar/:dni", async (req, res, next) => {
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
router.post("/borrar/:dni", async (req, res, next) => {
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
      user: data.user,
      estado: false,
      password: data.password,
    },
    {
      where: { dni: dni },
    }
  );
  await Paciente.update(
    {
      embarazada: data.embar,
      estado: false
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/paciente/pacientes");
  next();
});

// 3000:/persona/buscar/   solo a modo ejemplo esto lo hace la tabla
/* router.post("/buscar", async (req, res) => {
  const dni = req.body.dniBuscar;
  const personaEditable = await Persona.findOne({ where: { dni: dni } });

  res.render("pages/tablaPacientes", { persona: personaEditable });
}); */

module.exports = router;

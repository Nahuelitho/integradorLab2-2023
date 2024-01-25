const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require("../models/Persona");
const Paciente = require("../models/Paciente");
const bcrypt = require("bcryptjs");

//metodos de Paciente
router.get("/", (req, res, next) => {
  res.render("pages/personaFormulario");
  next();
});

///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.post("/", async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 5);
  const persona = await Persona.create({
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
    user: req.body.user,
    password: hashedPassword,
  });
  const paciente = await Paciente.create({
    idPersona: persona.id,
    embarazada: req.body.embarazada,
  });
  res.redirect("/login");
  /*res.status(200).json({
    ok: true,
    message: 'Paciente creado!!'
  })*/
  next();
});

//lista todos los pacientes en una tabla persona/pacientes
router.get("/pacientes", async (req, res, next) => {
  const pacientes = await Paciente.findAll();
  var idPacientes =[];
  pacientes.forEach(function(paciente){
    idPacientes.push(paciente.idPersona)
  })
  const personas = await Persona.findAll({
    where: {
      id: idPacientes
    }
  });
  
  res.render("pages/tabla", { personas: personas });
  next();
});
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
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/paciente/pacientes");
  next();
});

// 3000:/persona/buscar/   solo a modo ejemplo esto lo hace la tabla
router.post("/buscar", async (req, res) => {
  const dni = req.body.dniBuscar;
  const personaEditable = await Persona.findOne({ where: { dni: dni } });

  res.render("pages/tabla", { persona: personaEditable });
});

module.exports = router;

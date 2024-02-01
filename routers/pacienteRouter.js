const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require("../models/Persona");
const Paciente = require("../models/Paciente");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
//metodos de Paciente
router.get("/", async (req, res, next) => {
  const personas = Persona.findAll();
  const pacientes = Paciente.findAll();
  res.render("pages/personaFormulario",{pacientes: pacientes, personas: personas});
  next();
});

///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.post("/", async (req, res, next) => {
  const personas = await Persona.findAll();
  var dniPersonas = [];
  var emailPersonas = [];
  var usersPersonas = [];
  personas.forEach(function (perso) {
    dniPersonas.push(perso.dni);
    emailPersonas.push(perso.email);
    usersPersonas.push(person.user);
  });
  if ((!dniPersonas.includes(req.body.dni))&&(!emailPersonas.includes(req.body.email))&&(!usersPersonas.includes(req.body.user))){
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
      estado: true,
      user: req.body.user,
      password: hashedPassword,
    });
    await Paciente.create({
      idPersona: persona.id,
      embarazada: req.body.embarazada,
      estado:true
    });
    res.redirect("/login"); 
  } else {
    const personaEncontrada = await Persona.findOne({where: {dni : req.body.dni}})
    const pacienteEncontrado = await Paciente.findOne({where: {idPersona : personaEncontrada.id }})
    if(personaEncontrada.estado == false || pacienteEncontrado.estado == false){
       
      
    }
    else{
      res.send('<h1>Persona ya existente</h1>')
    }
  }

  next();
});

//lista todos los pacientes en una tabla persona/pacientes
router.get("/pacientes", async (req, res, next) => {
  const pacientes = await Paciente.findAll({ where: { estado: true } });
  var idPacientes = [];
  pacientes.forEach(function (paciente) {
    idPacientes.push(paciente.idPersona);
  });
  const personas = await Persona.findAll({
    where: {
      id: idPacientes,
      estado: true,
    },
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

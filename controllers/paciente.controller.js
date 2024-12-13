const router = require("express").Router();
const { json } = require("express");
//require para requerir a personas
const Persona = require("../models/Persona");
const Paciente = require("../models/Paciente");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const controllerPaciente = {};

controllerPaciente.formPaciente = (req, res, next) => {
  res.render("pages/pacientes/crearPaciente");
  next();
};

controllerPaciente.alta = async (req, res, next) => {
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
  if ((!dniPersonas.includes(req.body.dni))&&(!usersPersonas.includes(req.body.user))){
    
    const persona = await Persona.create(datosPersona);
    const paciente = await Paciente.create({
      idPersona: persona.id,
      embarazada: req.body.embarazada,
      diagnostico: req.body.diagnostico,
      estDiagnostico: req.body.estDiag,
      estado:true
    });
    res.redirect('/pacientes')
    
    
  } else {
    // !usuario igual y dni distinto no encuentra al usuario y devuelve persona.id null
    const personaEncontrada = await Persona.findOne({where: {dni : req.body.dni}})
    const pacienteEncontrado = await Paciente.findOne({where: {idPersona : personaEncontrada.id }})
    if(personaEncontrada.estado == 0 || pacienteEncontrado.estado == 0){
      await Persona.update(datosPersona, {where:{dni: personaEncontrada.dni}});
      await Paciente.update({
          embarazada: req.body.embarazada,
          diagnostico: req.body.diagnostico,
          estDiagnostico: req.body.estDiag,
          estado:true
        }, 
        {where: {idPersona: personaEncontrada.id}
      })
      res.redirect('/pacientes')
    }
    else{
      res.send('<h1>Persona ya existente</h1>')
    }
  }

  next();
};

controllerPaciente.mostrarPacientes =  async (req, res, next) => {
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
  res.render("pages/pacientes/tablaPacientes", { personas: personas });
  next();
};

controllerPaciente.mostrarPaciente =  async (req, res, next) => {
  const dni = req.params.dni;
  const persona = await Persona.findOne({ where: { dni: dni } });
  const paciente = await Paciente.findOne({ where: { idPersona: persona.id } });
  res.render("pages/pacientes/editarPaciente", {
    persona: persona,
    paciente: paciente,
  });
  next();
};

controllerPaciente.editarPaciente = async (req, res, next) => {
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
      estDiagnostico: data.estDiag,
      diagnostico: data.diagnostico,
      estado: true
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/pacientes");
  next();
};

controllerPaciente.eliminarPaciente = async (req, res, next) => {
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
      diagnostico: data.diagnostico,
      estDiagnostico: data.estDiag,
      estado: false
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/pacientes");
  next();
};




module.exports = controllerPaciente;
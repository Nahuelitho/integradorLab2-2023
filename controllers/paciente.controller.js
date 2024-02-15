const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require("../models/Persona");
const Paciente = require("../models/Paciente");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const controllerPaciente = {};

controllerPaciente.crearPaciente = async(req, res, next)=>{
const personas = await Persona.findAll();
  const pacientes = await Paciente.findAll();
  let dniPersonas= new Array();
  personas.forEach(function (perso) {
    dniPersonas.push(perso.dni);
  });
  res.render("pages/personaFormulario",{pacientes: pacientes, personas: personas});
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

  res.render("pages/tabla", { personas: personas });
  next();
}



module.exports = controllerPaciente;
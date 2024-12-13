const router = require("express").Router();
const { json } = require("express");
//require para requerir a personas
const Persona = require("../models/Persona");
const Secretaria = require("../models/Secretaria");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const controllerSecretaria = {};

//muestra el formulario para crear Secretaria
controllerSecretaria.formSecretaria = (req, res, next)=>{
    res.render("pages/secretaria/crearSecretaria")
    next();
}
//Da de alta a la secretaria
controllerSecretaria.alta = async (req, res, next)=>{
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
      const paciente = await Secretaria.create({
        idPersona: persona.id,
        titulo: req.body.titulo,
        fechaIngreso: req.body.fechaIngreso,
        estado:true
      });
      res.redirect('/personal');
    }

}

//Muestra todas las secretarias en una tabla
controllerSecretaria.mostrarSecretarias = async (req, res, next)=>{
    const secretarias = await Secretaria.findAll({ where: { estado: true } });
    var idSecretarias = [];
    secretarias.forEach(function (secretaria) {
        idSecretarias.push(secretaria.idPersona);
    });
    const personas = await Persona.findAll({
        where: {
        id: idSecretarias,
        estado: true,
        },
    });
    res.render("pages/secretaria/tablaSecretarias", { personas: personas, secretarias: secretarias });
    next();
}


module.exports = controllerSecretaria;
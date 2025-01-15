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
    res.render("pages/personal/crearSecretaria")
    next();
}
//Da de alta a la secretaria
controllerSecretaria.alta = async (req, res, next)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 5);
    const personas = await Persona.findAll();
    var dniPersonas = [];
    var emailPersonas = [];
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
      rol: 'secretaria',
      estado: true,
      password: hashedPassword
    };
    
    personas.forEach(function (perso) {
      dniPersonas.push(perso.dni);
      emailPersonas.push(perso.email);
    });
    if ((!dniPersonas.includes(req.body.dni))&&(!emailPersonas.includes(req.body.email))){
      
      const persona = await Persona.create(datosPersona);
      const secretaria = await Secretaria.create({
        idPersona: persona.id,
        titulo: req.body.titulo,
        fechaIngreso: req.body.fechaIngreso,
        estado:true
      });
      res.redirect('/personal/secretaria');
    }

}

//Muestra todas las secretarias en una tabla
controllerSecretaria.mostrarSecretarias = async (req, res, next)=>{
    const secretarias = await Secretaria.findAll({ where: { estado: true } });
    var idSecretarias = [];
    var listaPersonal =[];
    //recorremos la lista de Secretaria para obtener los idPersona para obtener los datos de la tabla Persona. 
    secretarias.forEach(function (secretaria) {
        idSecretarias.push(secretaria.idPersona);
    });
    const personas = await Persona.findAll({
        where: {
        id: idSecretarias,
        estado: true,
        },
    });
    //recorremos las 2 listas de las entidades Secretaria y Persona para obtener los datos necesarios
    //para enviar a la vista.
    secretarias.forEach(function(secretaria){
      personas.forEach(function(persona){
        var datoPersonal = {
          nombre: persona.nombre,
          apellido: persona.apellido,
          dni: persona.dni,
          email: persona.email,
          titulo: secretaria.titulo,
          idSecretaria: secretaria.id,
          idPersona: secretaria.idPersona
        }
        listaPersonal.push(datoPersonal);

      });
    });

    
    res.render("pages/personal/tablaPersonal", { listaPersonal : listaPersonal });
}


module.exports = controllerSecretaria;
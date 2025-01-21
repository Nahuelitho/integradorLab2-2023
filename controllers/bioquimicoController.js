const router = require("express").Router();
const { json } = require("express");
//require para requerir a personas
const Persona = require("../models/Persona");
const Bioquimico = require("../models/Bioquimico");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const controllerBioquimico = {};

//muestra el formulario para crear Bioquimico
controllerBioquimico.formBioquimico = (req, res, next)=>{
  res.render("pages/personal/crearBioquimico")
  next();
}
//Da de alta a la secretaria
controllerBioquimico.alta = async (req, res, next)=>{
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
    rol: 'bioquimico',
    estado: true,
    password: hashedPassword
  };
  
  personas.forEach(function (perso) {
    dniPersonas.push(perso.dni);
    emailPersonas.push(perso.email);
  });
  if ((!dniPersonas.includes(req.body.dni))&&(!emailPersonas.includes(req.body.email))){
    
    const persona = await Persona.create(datosPersona);
    const bioquimico = await Bioquimico.create({
      idPersona: persona.id,
      titulo: req.body.titulo,
      fechaIngreso: req.body.fechaIngreso,
      especialidad: req.body.especialidad,
      estado:true
    });
    res.redirect('/personal/bioquimico');
    next();
  }

}

//Muestra todas los Bioquimicos en una tabla
controllerBioquimico.mostrarBioquimicos = async (req, res, next)=>{
    const bioquimicos = await Bioquimico.findAll({ where: { estado: true } });
    var idBioquimicos = [];
    var listaPersonal =[];
    //recorremos la lista de Bioquimicos para obtener los idPersona. 
    bioquimicos.forEach(function (bioquimico) {
        idBioquimicos.push(bioquimico.idPersona);
    });
    //con los idPersona en la lista idBioquimicos solicitamos todas las personas con esos ids.
    const personas = await Persona.findAll({
        where: {
        id: idBioquimicos,
        estado: true,
        },
    });
    //recorremos las 2 listas de las entidades Bioquimico y Persona para obtener los datos necesarios
    //para enviar a la vista.
    bioquimicos.forEach(function(bioquimico){
      personas.forEach(function(persona){
        if(bioquimico.idPersona == persona.id){
          var datoPersonal = {
            nombre: persona.nombre,
            apellido: persona.apellido,
            dni: persona.dni,
            email: persona.email,
            rol: "bioquimico",
            titulo: bioquimico.titulo,
            especialidad: bioquimico.especialidad,
            idBioquimico: bioquimico.id,
            idPersona: bioquimico.idPersona
            
          }
          listaPersonal.push(datoPersonal);
        }

      });
    });

    
    res.render("pages/personal/tablaPersonal", { listaPersonal : listaPersonal, tipoLista : "bioquimico" });
    next();
}

module.exports = controllerBioquimico;
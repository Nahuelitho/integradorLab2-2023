const router = require("express").Router();
const { json } = require("express");
//require para requerir a tecnicos
const Persona = require("../models/Persona");
const Tecnico = require("../models/Tecnico");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const controllerTecnico = {};

//muestra el formulario para crear Tecnico
controllerTecnico.formTecnico = (req, res, next)=>{
    res.render("pages/personal/crearTecnico")
    next();
}

//Da de alta al Tecnico
controllerTecnico.alta = async (req, res, next)=>{
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
      rol: 'tecnico',
      estado: true,
      password: hashedPassword
    };
    
    personas.forEach(function (perso) {
      dniPersonas.push(perso.dni);
      emailPersonas.push(perso.email);
    });
    if ((!dniPersonas.includes(req.body.dni))&&(!emailPersonas.includes(req.body.email))){
      
      const persona = await Persona.create(datosPersona);
      const tecnico = await Tecnico.create({
        idPersona: persona.id,
        titulo: req.body.titulo,
        fechaIngreso: req.body.fechaIngreso,
        estado:true,
        matricula: req.body.matricula
      });
      res.redirect('/personal/tecnico');
    }

}

//Muestra todos los tecnicos en una tabla
controllerTecnico.mostrarTecnicos = async (req, res, next)=>{
    const tecnicos = await Tecnico.findAll({ where: { estado: true } });
    var idTecnicos = [];
    var listaPersonal =[];
    //recorremos la lista de Tecnicos para obtener los idPersona para obtener los datos de la tabla Persona. 
    tecnicos.forEach(function (tecnico) {
        idTecnicos.push(tecnico.idPersona);
    });
    const personas = await Persona.findAll({
        where: {
        id: idTecnicos,
        estado: true,
        },
    });
    //recorremos las 2 listas de las entidades Tecnico y Persona para obtener los datos necesarios
    //para enviar a la vista.
    tecnicos.forEach(function(tecnico){
      personas.forEach(function(persona){
        if(tecnico.idPersona == persona.id){
          var datoPersonal = {
            nombre: persona.nombre,
            apellido: persona.apellido,
            dni: persona.dni,
            email: persona.email,
            rol: "Técnico",
            titulo: tecnico.titulo,
            idTecnico: tecnico.id,
            idPersona: tecnico.idTecnico
            
          }
          listaPersonal.push(datoPersonal);
        }

      });
    });

    
    res.render("pages/personal/tablaPersonal", { listaPersonal : listaPersonal, tipoLista: "tecnico" });
    next();
}


module.exports = controllerTecnico;
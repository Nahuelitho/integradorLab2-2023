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
      next();
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
        if(secretaria.idPersona == persona.id){
          var datoPersonal = {
            nombre: persona.nombre,
            apellido: persona.apellido,
            dni: persona.dni,
            email: persona.email,
            rol: "secretaria",
            titulo: secretaria.titulo,
            idSecretaria: secretaria.id,
            idPersona: secretaria.idPersona
            
          }
          listaPersonal.push(datoPersonal);
        }

      });
    });

    
    res.render("pages/personal/tablaPersonal", { listaPersonal : listaPersonal, tipoLista: "secretaria" });
    next();
}

controllerSecretaria.editar = async (req, res, next)=>{
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
      password: data.password,
      rol: 'secretaria',
    },
    {
      where: { dni: dni },
    }
  );
  await Secretaria.update(
    {
      idPersona: persona.id,
      titulo: req.body.titulo,
      fechaIngreso: req.body.fechaIngreso,
      estado:true
    },
    {
      where: { idPersona: persona.id },
    }
  );
  res.redirect('/personal/secretaria');
  next();
}
controllerSecretaria.mostrarSecretaria = async (req, res, next)=>{
  const dni = req.params.dni;
  const persona = await Persona.findOne({ where: { dni: dni } });
  const secretaria = await Secretaria.findOne({ where: { idPersona: persona.id } });
  res.render("pages/pacientes/editarSecretaria", {
    persona: persona,
    paciente: paciente,
  });
  next();
}

controllerSecretaria.eliminarSecretaria = async (req, res, next) => {
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
      estado: false,
      rol: 'secretaria',
      password: data.password,
    },
    {
      where: { dni: dni },
    }
  );
  await Secretaria.update(
    {
      estado: false
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/personal/secretaria");
  next();
};




module.exports = controllerSecretaria;
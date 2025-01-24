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
      next();
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

controllerTecnico.editarTecnico = async (req, res, next)=>{
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
      rol: 'tecnico',
    },
    {
      where: { dni: dni },
    }
  );
  await Tecnico.update(
    {
      idPersona: persona.id,
      titulo: req.body.titulo,
      fechaIngreso: req.body.fechaIngreso,
      matricula: req.body.matricula,
      estado:true
    },
    {
      where: { idPersona: persona.id },
    }
  );
  res.redirect('/personal/tecnico');
  next();
}
controllerTecnico.mostrarTecnico = async (req, res, next)=>{
  const dni = req.params.dni;
  const persona = await Persona.findOne({ where: { dni: dni } });
  const tecnico = await Tecnico.findOne({ where: { idPersona: persona.id } });
  res.render("pages/tecnico/editarTecnico", {
    persona: persona,
    tecnico: tecnico,
  });
  next();
}

controllerTecnico.eliminarTecnico = async (req, res, next) => {
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
      rol: 'tecnico',
      password: data.password,
    },
    {
      where: { dni: dni },
    }
  );
  await Tecnico.update(
    {
      estado: false
    },
    {
      where: { idPersona: persona.id },
    }
  );

  res.redirect("/personal/tecnico");
  next();
};

module.exports = controllerTecnico;
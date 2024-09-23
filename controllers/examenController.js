const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a examenes
const Examen = require("../models/Examen");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const examenController = {};

examenController.formExamen = async (req, res, next)=>{
  res.render("pages/detalleExamen")
};

examenController.altaExamen = async(req, res, next)=>{
    const examenes = await Examen.findAll();
    console.log("Examenes: ", examenes);
    console.log("req.body: ", req.body);
    const datosExamen = {
      nombre: req.body.nombre,
      valRefHombreD: req.body.valRefHombreD,
      valRefHombreH: req.body.valRefHombreH,
      valRefMujerD: req.body.valRefMujerD,
      valRefMujerH: req.body.valRefMujerH,
      valRefNinioD: req.body.valRefNinioD,
      valRefNinioH: req.body.valRefNinioH,
      estado: true
    }
    var nombreExamen = [];
    examenes.forEach(element => {
      nombreExamen.push(element.nombre)
    });
    if(!nombreExamen.includes(req.body.nombre)){
      const examen = await Examen.create(datosExamen);
      res.redirect("/examenes");
      next();
    } else {
      const examenEncontrado = await Examen.findOne({where: {nombre: datosExamen.nombre}});
      if(examenEncontrado.estado==0){
        await Examen.update(datosExamen, {where:{nombre: examenEncontrado.nombre}});
        res.redirect("/examenes",{examenes: examenes});
        next();
      } else{
        res.send('<h1>Examen ya existente</h1>')
        next();
      }
    }
      
      
    };

examenController.obtenerExamenes = async(req, res, next)=>{
    const examenes = await Examen.findAll({where: { estado: true }});
    res.render("pages/listadoExamen",{examenes: examenes});
      next();
}

examenController.BuscarXId = async(req, res, next) => {
  console.log("Examen Id: ", req.params.id);
  const IdExamen = req.params.id;
  const examen = await Examen.findOne({where: {id : IdExamen}});
  console.log("Examen que se recupera: ", examen);
  res.render("pages/examenes/editarExamen", {examen : examen});
  next();
}

examenController.EditarExamen = async(req, res, next) => {
  console.log("Examen Id: ", req.params.id);
  const id = req.params.id;
  console.log("examen: ", req.body);
  const examen = await Examen.findOne({ where: {id: id}});
  const data = req.body;
  console.log("examen encontrado: ", examen);
  await Examen.update(
    { nombre: data.nombre,
      valRefHombreD: data.valRefHombreD,
      valRefHombreH: data.valRefHombreH,
      valRefMujerD: data.valRefMujerD,
      valRefMujerH: data.valRefMujerH,
      valRefNinioD: data.valRefNinioD,
      valRefNinioH: data.valRefNinioH,
      estado: true,
    },
  {
    where: {id: id},
  });
  res.redirect("/examenes");
  next();
}
module.exports = examenController;
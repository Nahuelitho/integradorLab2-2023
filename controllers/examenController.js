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
  const IdExamen = req.params.id;
  const examen = await Examen.findOne({where: {id : IdExamen}});
  res.render("pages/detalleExamen", {examen : examen});
}
module.exports = examenController;
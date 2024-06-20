const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a examenes
const Examen = require("../models/Examen");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const examenController = {};

examenController.altaExamen = async(req, res, next)=>{
    const examenes = await Examen.findAll();
      
      res.render("pages/detalleExamen",{examenes: examenes});
      next();
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
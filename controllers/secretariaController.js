const router = require("express").Router();
const { json } = require("express");
//require para requerir a personas
const Persona = require("../models/Persona");
const Secretaria = require("../models/Secretaria");
const bcrypt = require("bcryptjs");
const Swal = require("sweetalert2");
const controllerSecretaria = {};

//alta
controllerSecretaria.formSecretaria = (req, res, next)=>{
    res.render();
}
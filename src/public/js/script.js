const express = require('express');
const { response } = require('../../app/app');

function elmejorScript(e){
    const formulario = document.getElementById("formPrueba");
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        document.getElementById("nombre").innerHTML = express.request.body.nombre;
        document.getElementById("apellido").innerHTML = express.request.body.apellido;
        document.getElementById("dni").innerHTML = express.request.body.dni;


    })

}
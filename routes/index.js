var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();

import {obtenerPersona} from '../public/javascript/metodos.mjs';
const Personas = require('../models/persona.model')
const PORT = 3001;

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**************************/
app.get('/persona', function(req, res, next) {
  res.render('formularioPersona', {
    pretty: true,
    user: { name: "ricardo", email: "gg@mail.com", city: "san luis" },
  });
});
app.post('/persona', async (req, res) => {
    await Personas.sync()
    const createPersona = await Personas.create({
        nombre: obtenerPersona().nombre,
        apellido: metodos.apellido,
        dni: metodos.dni,
        mail: metodos.mail,
        sexo: metodos.sexo,
        fechaNacimiento: metodos.fechaNacimiento,
        domicilio: metodos.domicilio,
        provincia: metodos.provincia,
        localidad: metodos.localidad,
        obraSocial: metodos.obraSocial,
        numeroAfiliado: metodos.numeroAfiliado,
        user: metodos.user,
        password: metodos.password
    })
    res.status(201).json({
      ok: true,
      status: 201,
      message: "Persona creada"
    });


})
        
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("proyecto_prueba", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
const func = async function(){
  try {
   await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}
func();


        /* nombre : req.nombre,
        apellido: req.apellido,
        dni: req.dni,
        mail: req.mail,
        sexo: req.sexo,
        fechaNacimiento: req.fechaNacimiento,
        domicilio: req.domicilio,
        provincia: req.provincia,
        localidad: req.localidad,
        obraSocial: req.obraSocial,
        numeroAfiliado: req.numeroAfiliado,
        user: req.user,
        password: req.password */
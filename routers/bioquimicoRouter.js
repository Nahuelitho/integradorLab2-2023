const router = require("express").Router();
//ruteador para requerir bioquimicos
const Bioquimico = require('../models/Bioquimico');

//metodos de persona
router.get("/", (req, res, next) => {
  res.render("");
  next();
});
//alta bioquimico en bd con creacion de tabla de ser necesario primero 
//crea la persona y asigna el id a bioquimico(idPersona)
router.post("/bioquimico", async (req, res) => {
  const persona = await Persona.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    email: req.body.email,
    sexo: req.body.sexo,
    fechaNacimiento: req.body.fechaNacimiento,
    domicilio: req.body.domicilio,
    provincia: req.body.provincia,
    localidad: req.body.localidad,
    obraSocial: req.body.obraSocial,
    numeroAfiliado: req.body.numeroAfiliado,
    user: req.body.user,
    password: req.body.password,
  });
  const createBioquimico = await Bioquimico.create({
    titulo: req.body.titulo,
    especialidad: req.body.especialidad,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Bioquimico creado",
  });
});

module.exports = router;
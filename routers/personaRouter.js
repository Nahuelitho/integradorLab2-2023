const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require('../models/Persona.model');

//metodos de persona
router.get("/", (req, res, next) => {
  res.render("pages/personaFormulario");
  next();
});
// 3000:/persona/buscar
router.get("/buscar", (req, res, next) => {
  res.render("pages/formPrueba");
  next();
});

// 3000:/persona/buscar/
router.post("/buscar", async (req, res) => {
  const dni = req.body.dni;
  const persona = await Persona.findOne({ where: { dni: dni } });

  res.render("pages/formPrueba", { persona: persona });
});

//alta persona en bd con creacion de tabla de ser necesario
router.post("/", async (req, res, next) => {
  await Persona.sync();
  const createPersona = await Persona.create({
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
  res.status(201).json({
    ok: true,

    status: 201,

    message: "Persona creada",
  });
  next();
});


//pages/actualizar url
router.put("/actualizar", async (req, res, next) => {
  
  const dni = req.body.dni;
  const datosPersona = req.body;
  const actualizarPersona = await Persona.update(
    {
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
    },
    {
      where: {dni : datosPersona.dni}
    }
  );
  
  res.status(200).json({
    ok: true,
    message: 'persona actualizada'
  });
  next();
});

////------------------------
/* router.patch("/", async (req, res) => {
  const dni = req.params.dni;
  const datosPersona = req.body;
  const actualizarPersona = await Persona.update(
    {
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
    },
    {
      where: dni,
    }
  );
  res.status(200).json({
    ok: true,
    message: 'persona actualizada'
  })
}); */

module.exports = router;

const router = require("express").Router();
const { json } = require("express");
//ruteador para requerir a personas
const Persona = require('../models/Persona');
const Paciente = require('../models/Paciente');



//metodos de Paciente
router.get("/", (req, res, next) => {
  res.render("pages/personaFormulario");
  next();
});

//lista todos los pacientes en una tabla persona/pacientes
router.get("/pacientes", async(req, res, next)=>{
  const personas = await Persona.findAll();
  res.render("pages/tabla", { personas: personas })
  next();

});
///crear, primero crea la persona y luego le asigna el id de esa persona al  Paciente (idPersona)
router.post("/", async (req, res, next)=>{
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
  const paciente = await Paciente.create({
    idPersona: persona.id,
    embarazada: req.body.embarazada,
  });
  res.status(200).json({
    ok: true,
    message: 'Paciente creado!!'
  })
  next();
})


//alta persona en bd con creacion de tabla de ser necesario
/* router.post("/", async (req, res, next) => {
  
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
}); */

router.get("/actualizar", (req, res, next)=>{
  res.render("pages/formPrueba");
  next();
})

//persona/actualizar url
router.post("/actualizar", async (req, res, next) => {
  const dni = req.body.dni;
  const data= req.body;
  const actualizarPersona = await Persona.update(
    {
      nombre: data.nombre,
      apellido: data.apellido,
      dni: data.dni,
      email: data.email,
      sexo: data.sexo,
      fechaNacimiento: data.fechaNacimiento,
      domicilio: data.domicilio,
      provincia: data.provincia,
      localidad: data.localidad,
      obraSocial: data.obraSocial,
      numeroAfiliado: data.numeroAfiliado,
      user: data.user,
      password: data.password,
    },
    {
      where: {dni: dni}
    }
  );
  
  res.status(200).json({
    ok: true,
    message: 'persona actualizada',
    body: actualizarPersona
  });
  next();
});

// 3000:/persona/buscar/   solo a modo ejemplo esto lo hace la tabla
router.post("/buscar", async (req, res) => {
  const dni = req.body.dniBuscar;
  const persona = await Persona.findOne({ where: { dni: dni } });

  res.render("pages/formPrueba", { persona: persona });
});


module.exports = router;

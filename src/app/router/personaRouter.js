const router = require("express").Router();
//ruteador para requerir a personas
const path = require("path");
const { send } = require("process");
const dir = path.resolve(path.join("src", "model", "persona.model"));
const Persona = require(dir);

//metodos de persona
/* router.get("/", (req, res, next) => {
  res.render("pages/personaFormulario");
  next();
}); */
router.get("/:dni", function filtro(){ async (req, res) => {
  const dni = req.params.dni;
  const persona = await Persona.findOne({
    where: { dni },
  })};
  /* res.status(200).json({
    ok: true,
    status: 200,
    body: persona,
  }); */
  res.send(persona)
});
//alta persona en bd con creacion de tabla de ser necesario
router.post("/", async (req, res) => {
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
});
router.put("/", async (req, res) => {});
router.patch("/", async (req, res) => {
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
  })
});

module.exports = router;

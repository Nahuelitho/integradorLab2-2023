const router = require("express").Router();
//ruteador para requerir secretarias
const path = require("path");
const dir = path.resolve(path.join('src', 'model', 'secretaria.model'));
const Secretaria = require(dir);

//metodos de secretaria:

//obtener todas las secretarias.
router.get("/", async (req, res) => {
  /* const secretarias = await Secretaria.findAll(); */
});
//alta secretaria en bd con creacion de tabla de ser necesario
router.post("/", async (req, res) => {
  await Secretaria.sync();
  const createSecretaria = await Secretaria.create({
    matricula: req.body.matricula,
    titulo: req.body.titulo,
    fechaIngresoInstitucion: req.body.fechaIngresoInstitucion
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Secretaria creada",
  });
});

module.exports = router;
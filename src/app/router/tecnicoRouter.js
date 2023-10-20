const router = require("express").Router();
//ruteador para requerir tecnicos
const path = require("path");
const dir = path.resolve(path.join('src', 'model', 'tecnico.model'));
const Tecnico = require(dir);

//metodos de persona
router.get("/", (req, res, next) => {
  res.render("");
  next();
});
//alta tecnico en bd con creacion de tabla de ser necesario
router.post("/", async (req, res) => {
  await Tecnico.sync();
  const createTecnico = await Tecnico.create({
    matricula: req.body.matricula,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Tecnico creado",
  });
});

module.exports = router;
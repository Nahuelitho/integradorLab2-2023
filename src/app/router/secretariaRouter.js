const router = require("express").Router();
//ruteador para requerir secretarias
const path = require("path");
const dir = path.resolve(path.join('src', 'model', 'secretaria.model'));
const Secretaria = require(dir);

//metodos de secretaria
router.get("/", (req, res, next) => {
  res.render("");
  next();
});
//alta secretaria en bd con creacion de tabla de ser necesario
router.post("/", async (req, res) => {
  await Secretaria.sync();
  const createSecretaria = await Secretaria.create({
    titulo: req.body.titulo,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Secretaria creada",
  });
});

module.exports = router;
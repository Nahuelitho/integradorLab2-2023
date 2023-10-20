const router = require("express").Router();
//ruteador para requerir bioquimicos
const path = require("path");
const dir = path.resolve(path.join('src', 'model', 'bioquimico.model'));
const Bioquimico = require(dir);

//metodos de persona
router.get("/", (req, res, next) => {
  res.render("");
  next();
});
//alta bioquimico en bd con creacion de tabla de ser necesario
router.post("/", async (req, res) => {
  await Bioquimico.sync();
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
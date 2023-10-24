const router = require("express").Router();
//ruteador para requerir a ordenes de trabajo
const path = require("path");
const { send } = require("process");
const dir = path.resolve(path.join("src", "model", "ordenTrabajo.model"));
const OrdenTrabajo = require(dir);

router.get("/", (req, res, next) => {
  res.render("pages/");
  next();
}); 

router.post("/buscar/",async (req, res) => {
  
  const ordenId = req.body.ordenId;
  var orden = await OrdenTrabajo.findAll({where: { ordenId: orden } });
  res.status(200).json({
    ok: true,
    status: 200,
    body: orden,
   
  });
  console.log(orden)
  res.send();
});

router.post("/", async(req, res) => {
    await OrdenTrabajo.sync();
    const createOrdenTrabajo = await OrdenTrabajo.create({
        pacienteId: req.body.pacienteId,
        diagnostico: req.body.diagnostico,
        estado: req.body.estado,
        fechaCreacion: req.body.fechaCreacion,
        fechaAnalisis: req.body.fechaAnalisis,
        fechaCambioEstado: req.body.fechaCambioEstado,
        medicoSolicitante: req.body.medicoSolicitante,
});
res.status(201).json({
    ok: true,
    status: 201,
    message: "Orden de Trabajo creada",
  });
});
module.exports = router;
const router = require("express").Router();
//ruteador para requerir a examenes
const path = require("path");
const { send } = require("process");
const dir = path.resolve(path.join("src", "model", "examen.model"));
const Examen = require(dir);

//index con rutas en el html
router.get("/", (req, res, next) => {
  res.render("pages/examenes");
    next();
});


module.exports = router;
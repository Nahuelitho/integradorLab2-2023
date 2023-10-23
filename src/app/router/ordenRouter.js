const router = require("express").Router();

//index con rutas en el html
router.get("/", (req, res, next) => {
  res.render("pages/ordenTrabajo");
    next();
});


module.exports = router;
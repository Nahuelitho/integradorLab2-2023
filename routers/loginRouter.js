const router = require("express").Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const  Persona  = require('../models/Persona'); 

//index con rutas en el html
router.get("/", (req, res, next) => {
  res.render("pages/login");
  next();
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { user, password } = req.body;
  const usuario = await Persona.findOne({ where: { user } });
  if (usuario) {
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (passwordValido) {
      // Genera un token JWT
      const token = jwt.sign({ user: usuario.user }, 'tu_secreto_secreto', { expiresIn: '1h' });
      // Realiza una redirección después de la autenticación exitosa
      res.redirect('/paciente/pacientes');
    } else {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } else {
    res.status(401).json({ error: "El usuario no existe" });
  }
})

module.exports = router;
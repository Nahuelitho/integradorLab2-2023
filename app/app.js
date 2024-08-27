const express = require("express");
const app = express();
const estilos = __dirname.replace("app", "public");
var bodyParser = require('body-parser');
const pacienteRouter = require("../routers/pacienteRouter");
const tecnicoRouter = require("../routers/tecnicoRouter");
const secretariaRouter = require("../routers/secretariaRouter");
const loginRouter = require("../routers/loginRouter")
const examenRouter = require("../routers/examenRouter");
const ordenRouter = require("../routers/ordenTrabajoRouter");
const determinacionRouter = require("../routers/determinacionRouter");
const muestraRouter = require("../routers/muestraRouter");
const referenciaRouter = require("../routers/referenciaRouter");

//configuracion 
app.set("views", "./view");
app.set("view engine", "pug");
//middlewares
app.use(express.static(estilos));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//pasar por aca las rutas nuevas para aplicarle los middlewares (obtener datos de formularios o tratamiento
//de datos)

app.use('/', loginRouter);
app.use('/pacientes', pacienteRouter);
app.use('/tecnico', tecnicoRouter);
app.use('/secretaria', secretariaRouter);
app.use('/login', loginRouter);
app.use('/examenes', examenRouter);
app.use('/ordenTrabajo', ordenRouter);
app.use('/determinacion', determinacionRouter);
app.use('/muestra', muestraRouter);
app.use('/referencia', referenciaRouter);

module.exports = app;

const express = require("express");
const app = express();
const estilos = __dirname.replace("app", "public");
var bodyParser = require('body-parser');
const personaRouter = require("../routers/personaRouter");
const tecnicoRouter = require("../routers/tecnicoRouter");
const secretariaRouter = require("../routers/secretariaRouter");
const loginRouter = require("../routers/loginRouter")
const tablaRouter = require("../routers/tablaRouter");
const examenRouter = require("../routers/examenRouter");
const ordenRouter = require("../routers/ordenTrabajoRouter");

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
app.use('/persona', personaRouter);
app.use('/tecnico', tecnicoRouter);
app.use('/secretaria', secretariaRouter);
app.use('/login', loginRouter);
app.use('/tabla', tablaRouter);
app.use('/examen', examenRouter);
app.use('/ordenTrabajo', ordenRouter);

module.exports = app;

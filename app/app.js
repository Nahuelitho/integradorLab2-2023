const express = require("express");
const app = express();
const estilos = __dirname.replace("app", "public");
var bodyParser = require('body-parser');
const indexRouter = require("../src/routers/indexRouter");
const personaRouter = require("../src/routers/personaRouter");
const tecnicoRouter = require("../src/routers/tecnicoRouter");
const secretariaRouter = require("../src/routers/secretariaRouter");
const loginRouter = require("../src/routers/loginRouter")
const tablaRouter = require("../src/routers/tablaRouter");
const examenRouter = require("../src/routers/examenRouter");
const ordenRouter = require("../src/routers/ordenRouter");

//configuracion 
app.set("views", "./src/view");
app.set("view engine", "pug");
//middlewares
app.use(express.static(estilos));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//pasar por aca las rutas nuevas para aplicarle los middlewares (obtener datos de formularios o tratamiento
//de datos)
app.use('/', indexRouter);
app.use('/persona', personaRouter);
app.use('/tecnico', tecnicoRouter);
app.use('/secretaria', secretariaRouter);
app.use('/login', loginRouter);
app.use('/tabla', tablaRouter);
app.use('/examen', examenRouter);
app.use('/ordenTrabajo', ordenRouter);

module.exports = app;

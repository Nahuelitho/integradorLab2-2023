const express = require("express");
const app = express();
const estilos = __dirname.replace("app", "public");
var bodyParser = require('body-parser');
const indexRouter = require("./router/indexRouter");
const personaRouter = require("./router/personaRouter");
const tecnicoRouter = require("./router/tecnicoRouter");
const secretariaRouter = require("./router/secretariaRouter");
const loginRouter = require("./router/loginRouter")

//configuracion 
app.set("views", "./src/public/view");
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

module.exports = app;

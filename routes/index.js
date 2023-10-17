var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();
const PORT = 3001;

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**************************/
app.get('/persona', function(req, res, next) {
  res.render('formularioPersona', {
    pretty: true,
    user: { name: "ricardo", email: "gg@mail.com", city: "san luis" },
  });
});
/**************************/
/* app.get('/login', function(req, res, next) {
  res.render('login', {
    pretty: true,
    user: { name: "ricardo", email: "gg@mail.com", city: "san luis" },
  });
}); */
/**************************/
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("bd_proyectointegrador", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
const func = async function(){
  try {
   await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}
func();
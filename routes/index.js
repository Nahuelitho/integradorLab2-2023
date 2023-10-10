var express = require('express');
var router = express.Router();
const path = require('path');
const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**************************/
app.get('/', function(req, res, next) {
  res.render('login', {
    pretty: true,
    user: { name: "ricardo", email: "gg@mail.com", city: "san luis" },
  });
});
/**************************/
app.get('/login', function(req, res, next) {
  res.render('login', {
    pretty: true,
    user: { name: "ricardo", email: "gg@mail.com", city: "san luis" },
  });
});
/**************************/
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
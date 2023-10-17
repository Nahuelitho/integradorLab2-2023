var express = require('express');
var router = express.Router();
const persona = require('../models/persona.model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* router.get('/formularioPersona', function(req, res, next) {
    res.send('formularioPersona.pug');
});

 router.post('/persona',async(req, res)=> {
  await persona.sync()
  const createperson = await persona.createperson({

  }) 
}); */
 


module.exports = router;

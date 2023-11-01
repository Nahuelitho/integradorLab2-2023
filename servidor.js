//conexion  del servidor
const app = require("./app/app");


//start server
app.listen(3000, async () => {

  
  console.log("Servidor en puerto 3000");

 
});

//conexion a base de datos REVISAR

/* const sequelize = new Sequelize("lab2prueba", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
}); */

 
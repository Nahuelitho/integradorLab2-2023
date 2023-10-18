//conexion  del servidor
const app = require("./app/app");
app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
//conexion a base de datos
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("bd_proyectointegrador", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});


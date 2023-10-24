const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
class Muestra extends Model{}

Muestra.init({
    muestraId:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true
    },
    pacienteId:{
      type: DataTypes.UUID,
      allowNull: false 
    },
    fechaHorarecoleccion: {
       type: DataTypes.DATE,
       allowNull: false
    }
   },
   {
    sequelize,
    modelName: "Persona"
  });
   
  module.exports = Muestra;
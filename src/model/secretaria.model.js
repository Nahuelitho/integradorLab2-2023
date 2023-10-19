const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });

  class Secretaria extends Model{}

  Tecnico.init({
    secretariaId:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey : true
    },
    fechaIngresoInstitucion: {
        type: DataTypes.DATE,
    }
  });

  module.exports = Secretaria;
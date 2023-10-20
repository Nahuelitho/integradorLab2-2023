const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });

  class Secretaria extends Model{}

  Secretaria.init({
    secretariaId:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey : true
    },
    titulo:{
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaIngresoInstitucion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    
  },
  { sequelize, 
    modelName: "Secretaria"
  }
  );

  module.exports = Secretaria;
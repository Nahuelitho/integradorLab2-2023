const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
class Examen extends Model{}

Examen.init({
    examenId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true
    },
    muestraId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaEntregaResultado: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "Examen"
    }
);

module.exports = Examen;
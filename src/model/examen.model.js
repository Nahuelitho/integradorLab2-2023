const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
class Examen extends Model{}

Examen.init({
    examenId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    muestraId: {
        type: DataTypes.INTEGER,
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
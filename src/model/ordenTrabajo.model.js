const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
class OrdenTrabajo extends Model{}

OrdenTrabajo.init({
    ordenId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey : true 
    },
    pacienteId:{
        type: DataTypes.UUID,
        foreignKey: true
    },
    diagnostico:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaCreacion:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    fechaAnalisis:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    fechaCambioEstado:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    medicoSolicitante:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        modelName: "OrdenTrabajo"
    });

module.exports = OrdenTrabajo;
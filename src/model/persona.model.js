const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("proyecto_prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
class Persona extends Model{} 

Persona.init({
    persona_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true
      
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull:false
    },
    domicilio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    provincia:{
        type: DataTypes.STRING,
        allowNull: false
    },
    localidad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    obraSocial:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroAfiliado:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: "Persona"
  });
  module.exports = Persona;
  
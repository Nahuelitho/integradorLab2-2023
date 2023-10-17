'use strict';

const { Model, DataTypes} = require('sequelize')


module.exports = (sequelize, DataTypes)=>{
/* class Persona extends Model{} */ 

let persona = sequelize.define('persona', {
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
    }
})
return persona;
}
"use strict";
/* const { Model, Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require("./index") */
const {Model, Sequelize, DataTypes} = require('sequelize')
const config = require(__dirname + '/../config/config.json')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Persona.hasOne(models.Bioquimico, {
        foreignKey: "idPersona",
      });
      Persona.hasOne(models.Paciente, {
        foreignKey: "idPersona",
      });
      Persona.hasOne(models.Secretaria, {
        foreignKey: "idPersona",
      });
      Persona.hasOne(models.Tecnico, {
        foreignKey: "idPersona",
      });
    }
  }
  Persona.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      dni:{ 
        type: DataTypes.STRING,
        unique: true,
        },
      telefono: DataTypes.STRING,
      email: DataTypes.STRING,
      fechaNacimiento: DataTypes.DATE,
      sexo: DataTypes.STRING,
      domicilio: DataTypes.STRING,
      provincia: DataTypes.STRING,
      localidad: DataTypes.STRING,
      obraSocial: DataTypes.STRING,
      numeroAfiliado: DataTypes.STRING,
      user: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Persona",
      tableName: "persona"
    }
  );

  module.exports = Persona;


 


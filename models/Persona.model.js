"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Persona.hasOne(models.Bioquimico.model, {
        foreignKey: "idPersona",
      });
      Persona.hasOne(models.Paciente.model, {
        foreignKey: "idPersona",
      });
      Persona.hasOne(models.Secretaria.model, {
        foreignKey: "idPersona",
      });
      Persona.hasOne(models.Tecnico.model, {
        foreignKey: "idPersona",
      });
    }
  }
  Persona.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      dni: DataTypes.STRING,
      email: DataTypes.STRING,
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
    }
  );
  return Persona;
};

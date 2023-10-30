"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicoSolicitante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicoSolicitante.hasMany(models.OrdenTrabajo.model, {
        foreignKey: "idMedicoSolicitante",
      });
    }
  }
  MedicoSolicitante.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      telefono: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MedicoSolicitante",
      tableName: "medicoSolicitante",
    }
  );
  return MedicoSolicitante;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tecnico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      Tecnico.belongsTo(models.Persona, {
        foreignKey: "id",
        target_key: "idPersona",
      });
    }
  }
  Tecnico.init(
    {
      idPersona: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      matricula: DataTypes.INTEGER,
      fechaIngreso: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Tecnico",
      tableName: "tecnico",
    }
  );
  return Tecnico;
};

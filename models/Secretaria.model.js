"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Secretaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      Secretaria.belongsTo(models.Persona.model, {
        foreignKey: "id",
        target_key: "idPersona",
      });
    }
  }
  Secretaria.init(
    {
      idPersona: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      fechaIngreso: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Secretaria",
      tableName: "secretaria",
    }
  );
  return Secretaria;
};

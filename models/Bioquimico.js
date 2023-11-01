"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bioquimico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      Bioquimico.belongsTo(models.Persona, {
        foreignKey: "id",
        target_key: "idPersona",
      });
    }
  }
  Bioquimico.init(
    {
      idPersona: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      especialidad: DataTypes.STRING,
      fechaIngreso: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Bioquimico",
      tableName: "bioquimico",
    }
  );
  return Bioquimico;
};

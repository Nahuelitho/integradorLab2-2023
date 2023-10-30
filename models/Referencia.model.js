"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Referencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      // Has
      Referencia.hasMany(models.Determinacion.model, {
        foreignKey: "idReferencia",
      });
    }
  }
  Referencia.init(
    {
      edadMin: DataTypes.INTEGER,
      edadMax: DataTypes.INTEGER,
      sexo: DataTypes.STRING,
      embarazo: DataTypes.BOOLEAN,
      valMin: DataTypes.DOUBLE,
      valMax: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Referencia",
      tableName: "referencia",
    }
  );
  return Referencia;
};

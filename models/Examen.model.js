"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Examen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Has
      Examen.hasMany(models.Muestra.model, {
        foreignKey: "idExamen",
      });
      Examen.hasMany(models.Orden_Examen.model, {
        foreignKey: "idExamen",
      });
    }
  }
  Examen.init(
    {
      nombre: DataTypes.STRING,
      fechaEntregaResultado: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Examen",
      tableName: "examen",
    }
  );
  return Examen;
};

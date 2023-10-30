"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orden_Examen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      Orden_Examen.belongsTo(models.Examen.model, {
        foreignKey: "id",
        target_key: "idExamen",
      });
      Orden_Examen.belongsTo(models.OrdenTrabajo.model, {
        foreignKey: "id",
        target_key: "idOrdenTrabajo",
      });
    }
  }
  Orden_Examen.init(
    {
      idExamen: DataTypes.INTEGER,
      idOrdenTrabajo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orden_Examen.model",
      tableName: "orden_examen",
    }
  );
  return Orden_Examen;
};

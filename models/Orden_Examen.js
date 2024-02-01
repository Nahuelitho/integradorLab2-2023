"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Orden_Examen extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // belongs to
    Orden_Examen.belongsTo(models.Examen, {
      foreignKey: "id",
      target_key: "idExamen",
    });
    Orden_Examen.belongsTo(models.OrdenTrabajo, {
      foreignKey: "id",
      target_key: "idOrdenTrabajo",
    });
  }
}
Orden_Examen.init(
  {
    idExamen: DataTypes.INTEGER,
    idOrdenTrabajo: DataTypes.INTEGER,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Orden_Examen",
    tableName: "orden_examen",
  }
);

module.exports = Orden_Examen;

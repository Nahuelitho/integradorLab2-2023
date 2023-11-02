"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Examen extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // Has
    Examen.hasMany(models.Muestra, {
      foreignKey: "idExamen",
    });
    Examen.hasMany(models.Orden_Examen, {
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

module.exports = Examen;

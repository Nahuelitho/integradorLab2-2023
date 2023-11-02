"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Referencia extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // belongs to
    // Has
    Referencia.hasMany(models.Determinacion, {
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

module.exports = Referencia;

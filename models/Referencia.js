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
  
  static associate(models) {
    // belongs to
    // Has
    Referencia.belongsTo(models.Determinacion, {
      foreignKey: "id",
      target_key: "idDeterminacion",
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
    idDeterminacion: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Referencia",
    tableName: "referencia",
  }
);

module.exports = Referencia;

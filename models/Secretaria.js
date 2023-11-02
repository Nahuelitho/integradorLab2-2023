"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Secretaria extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // belongs to
    Secretaria.belongsTo(models.Persona, {
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
module.exports = Secretaria;

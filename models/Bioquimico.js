"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
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
module.exports = Bioquimico;

"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Determinacion extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // Belongs to
    Determinacion.belongsTo(models.Resultado, {
      foreignKey: "id",
      target_key: "idResultado",
    });
    Determinacion.belongsTo(models.Referencia, {
      foreignKey: "id",
      target_key: "idReferencia",
    });
  }
}
Determinacion.init(
  {
    cantidad: DataTypes.DOUBLE,
    medida: DataTypes.STRING,
    idResultado: DataTypes.INTEGER,
    idReferencia: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Determinacion",
    tableName: "determinacion",
  }
);

module.exports = Determinacion;
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
  
  static associate(models) {
    // Belongs to
    Determinacion.belongsTo(models.Resultado, {
      foreignKey: "id",
      target_key: "idResultado",
    });
    Determinacion.hasMany(models.Referencia, {
      foreignKey: "idDeterminacion",
    });
    Determinacion.belongsTo(models.Examen, {
      foreignKey: "id",
      target_key: "idExamen"
    })
  }
}
Determinacion.init(
  {
    cantidad: DataTypes.DOUBLE,
    medida: DataTypes.STRING,
    idResultado: DataTypes.INTEGER,
    idExamen: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Determinacion",
    tableName: "determinacion",
  }
);

module.exports = Determinacion;

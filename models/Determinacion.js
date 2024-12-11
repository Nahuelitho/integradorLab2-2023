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
      target_key: "idExamen",
    });
  }
}
Determinacion.init(
  { 
    idResultado: DataTypes.INTEGER,
    idExamen: DataTypes.INTEGER,
    valorHallado: DataTypes.DOUBLE,
    unidadMedida: DataTypes.STRING,
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Determinacion",
    tableName: "determinacion",
  }
);

module.exports = Determinacion;

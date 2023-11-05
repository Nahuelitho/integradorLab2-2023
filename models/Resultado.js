"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Resultado extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    //has
    Resultado.hasMany(models.Determinacion, {
      foreignKey: "idResultado",
    });
  }
}
Resultado.init(
  {
    idOrdenTrabajo: DataTypes.INTEGER,
    idBioquimico: DataTypes.INTEGER,
    idMedicoSolicitante: DataTypes.INTEGER,
    estadoAprobado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
      
  },
  {
    sequelize,
    modelName: "Resultado",
    tableName: "resultado",
  }
);
module.exports = Resultado;

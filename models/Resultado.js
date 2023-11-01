"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
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
      estadoAprobado: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Resultado",
      tableName: "resultado",
    }
  );
  return Resultado;
};

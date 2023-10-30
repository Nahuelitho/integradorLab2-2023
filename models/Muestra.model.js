"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Muestra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      Muestra.belongsTo(models.Paciente.model, {
        foreignKey: "id",
        target_key: "idPaciente",
      });
      Muestra.belongsTo(models.Examen.model, {
        foreignKey: "id",
        target_key: "idExamen",
      });
    }
  }
  Muestra.init(
    {
      idPaciente: DataTypes.INTEGER,
      idExamen: DataTypes.INTEGER,
      fechaHoraRecoleccion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Muestra.model",
      tableName: "muestra",
    }
  );
  return Muestra;
};

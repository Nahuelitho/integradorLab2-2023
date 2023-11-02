"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Muestra extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // belongs to
    Muestra.belongsTo(models.Paciente, {
      foreignKey: "id",
      target_key: "idPaciente",
    });
    Muestra.belongsTo(models.Examen, {
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
    modelName: "Muestra",
    tableName: "muestra",
  }
);
module.exports = Muestra;

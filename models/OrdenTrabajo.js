"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class OrdenTrabajo extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // belongs to
    OrdenTrabajo.belongsTo(models.Paciente, {
      foreignKey: "id",
      target_key: "idPaciente",
    });
    OrdenTrabajo.belongsTo(models.MedicoSolicitante, {
      foreignKey: "id",
      target_key: "idMedicoSolicitante",
    });

    // has
    OrdenTrabajo.hasMany(models.Orden_Examen, {
      foreignKey: "idOrdenTrabajo",
    });
  }
}
OrdenTrabajo.init(
  {
    idPaciente: DataTypes.INTEGER,
    diagnostico: DataTypes.STRING,
    estado: DataTypes.STRING,
    fechaCreacion: DataTypes.DATEONLY,
    fechaEstimada: DataTypes.DATEONLY,
    fechaCambioEstado: DataTypes.DATEONLY,
    idMedicoSolicitante: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "OrdenTrabajo",
    tableName: "ordenTrabajo",
  }
);
module.exports = OrdenTrabajo;

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrdenTrabajo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      OrdenTrabajo.belongsTo(models.Paciente.model, {
        foreignKey: "id",
        target_key: "idPaciente",
      });
      OrdenTrabajo.belongsTo(models.MedicoSolicitante.model, {
        foreignKey: "id",
        target_key: "idMedicoSolicitante",
      });

      // has
      OrdenTrabajo.hasMany(models.Orden_Examen.model, {
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
  return OrdenTrabajo;
};

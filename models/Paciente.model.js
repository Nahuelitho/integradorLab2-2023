"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to
      Paciente.belongsTo(models.Persona.model, {
        foreignKey: "id",
        target_key: "idPersona",
      });

      // has
      Paciente.hasMany(models.Muestra.model, {
        foreignKey: "idPaciente",
      });
      Paciente.hasMany(models.OrdenTrabajo.model, {
        foreignKey: "idPaciente",
      });
    }
  }
  Paciente.init(
    {
      idPersona: DataTypes.INTEGER,
      embarazada: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Paciente",
      tableName: "paciente",
    }
  );
  return Paciente;
};

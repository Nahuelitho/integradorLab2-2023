"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Paciente extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // belongs to
    Paciente.belongsTo(models.Persona, {
      foreignKey: "id",
      target_key: "idPersona",
    });

    // has
    Paciente.hasMany(models.Muestra, {
      foreignKey: "idPaciente",
    });
    Paciente.hasMany(models.OrdenTrabajo, {
      foreignKey: "idPaciente",
    });
  }
}
Paciente.init(
  {
    idPersona: DataTypes.INTEGER,
    embarazada: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    diagnostico: {
      type: DataTypes.STRING,
    },
    estDiagnostico: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: "Paciente",
    tableName: "paciente",
  }
);
module.exports = Paciente;

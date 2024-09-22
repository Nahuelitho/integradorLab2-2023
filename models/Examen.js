"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
class Examen extends Model {
  static associate(models) {
    // Has
    Examen.hasMany(models.Muestra, {
      foreignKey: "idExamen",
    });
    Examen.hasMany(models.Orden_Examen, {
      foreignKey: "idExamen",
    });
    Examen.hasMany(models.Determinacion, {
      foreignKey: "idExamen",
    });
    Examen.hasMany(models.Muestra, {
      foreignKey: "idExamen",
    });
  }
}
Examen.init(
  {
    //idExamen: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    //fechaEntregaResultado: DataTypes.DATEONLY,
    valRefHombreD: { 
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    valRefHombreH: { 
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    valRefMujerD: { 
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    valRefMujerH: { 
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    valRefNinioD: { 
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    valRefNinioH: { 
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Examen",
    tableName: "examen",
  }
);

module.exports = Examen;

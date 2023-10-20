const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("lab2prueba", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

class Tecnico extends Model {}

Tecnico.init(
  {
    tecnicoId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Tecnico"
  }
);

module.exports = Tecnico;

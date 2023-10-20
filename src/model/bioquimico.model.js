const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize("lab2prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });

  class Bioquimico extends Model{}

Bioquimico.init({
    bioquimicoId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey : true
        
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      especialidad: {
        type: DataTypes.STRING,
        allowNull: false,
      }
},{
  sequelize,
  modelName: "Bioquimico"
}
);

module.exports = Bioquimico;
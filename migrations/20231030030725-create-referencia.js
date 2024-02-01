"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("referencia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      
      idDeterminacion: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "determinacion" },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },

      edadMin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      edadMax: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      embarazo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      valMin: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },

      valMax: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("referencia");
  },
};

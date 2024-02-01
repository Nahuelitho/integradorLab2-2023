"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("resultado", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      idOrdenTrabajo: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "ordenTrabajo" },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },

      idBioquimico: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "bioquimico" },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },

      idMedicoSolicitante: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "medicoSolicitante" },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },

      estadoAprobado: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("resultado");
  },
};

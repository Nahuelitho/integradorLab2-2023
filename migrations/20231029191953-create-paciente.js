"use strict";

const { sequelize } = require('../models/Persona');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("paciente", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      idPersona: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "persona" },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      diagnostico:{
        type: Sequelize.STRING,
        allowNull: false
      },
      estDiagnostico:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      embarazada: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("paciente");
  },
};

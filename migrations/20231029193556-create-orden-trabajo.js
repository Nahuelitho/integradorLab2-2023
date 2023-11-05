"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ordenTrabajo", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPaciente: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "paciente" },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      idExamen: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "examen" },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
      diagnostico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fechaCreacion: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      fechaEstimada: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      fechaCambioEstado: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      idMedicoSolicitante: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "medicoSolicitante" },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("ordenTrabajo");
  },
};

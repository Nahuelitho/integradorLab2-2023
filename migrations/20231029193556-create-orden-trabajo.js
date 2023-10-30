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
      },
      estado: {
        type: Sequelize.STRING,
      },
      fechaCreacion: {
        type: Sequelize.DATEONLY,
      },
      fechaEstimada: {
        type: Sequelize.DATEONLY,
      },
      fechaCambioEstado: {
        type: Sequelize.DATEONLY,
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

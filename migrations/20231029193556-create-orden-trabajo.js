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
          model: "Paciente.model",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      idExamen: {
        type: Sequelize.INTEGER,
        references: {
          model: "Examen.model",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
          model: "MedicoSolicitante.model",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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

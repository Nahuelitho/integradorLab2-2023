"use strict";

const { sequelize } = require("../models/Persona");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("persona", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      apellido: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      dni: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      fechaNacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },

      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      domicilio: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      provincia: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      localidad: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      obraSocial: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      numeroAfiliado: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      user: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      rol: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable("persona");
  },
};

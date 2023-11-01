"use strict";
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
      },
      apellido: {
        type: Sequelize.STRING,
      },
      dni: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      fechaNacimiento:{
        type: Sequelize.DATEONLY,
      },
      sexo: {
        type: Sequelize.STRING,
      },
      domicilio: {
        type: Sequelize.STRING,
      },
      provincia: {
        type: Sequelize.STRING,
      },
      localidad: {
        type: Sequelize.STRING,
      },
      obraSocial: {
        type: Sequelize.STRING,
      },
      numeroAfiliado: {
        type: Sequelize.STRING,
      },
      user: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
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

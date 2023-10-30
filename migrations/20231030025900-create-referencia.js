'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('referencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      edadMin: {
        type: Sequelize.INTEGER
      },
      edadMax: {
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING
      },
      embarazo: {
        type: Sequelize.BOOLEAN
      },
      valMin: {
        type: Sequelize.DOUBLE
      },
      valMax: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('referencia');
  }
};
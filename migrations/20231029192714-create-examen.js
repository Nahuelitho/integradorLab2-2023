"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("examen", {
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

      valRefHombreD: { 
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      valRefHombreH: { 
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      valRefMujerD: { 
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      valRefMujerH: { 
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      valRefNinioD: { 
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      valRefNinioH: { 
        type: Sequelize.DECIMAL,
        allowNull: true,
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
    await queryInterface.dropTable("examen");
  },
};

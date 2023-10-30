"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("determinacion", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cantidad: {
        type: Sequelize.DOUBLE,
      },
      medida: {
        type: Sequelize.STRING,
      },
      idResultado: {
        type: Sequelize.INTEGER,
        references: {
          model: "Resultado.model",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idReferencia: {
        type: Sequelize.INTEGER,
        references: {
          model: "Referencia.model",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("determinacion");
  },
};

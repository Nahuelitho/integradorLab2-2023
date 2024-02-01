"use strict";
const { where } = require("sequelize");
const models = require("../models/Paciente");
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.findOrCreate({
        where: { id: "1" },
        defaults: {
          idPersona: 1,
          embarazada: true,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "2" },
        defaults: {
          idPersona: 2,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "3" },
        defaults: {
          idPersona: 3,
          embarazada: true,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "4" },
        defaults: {
          idPersona: 4,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "5" },
        defaults: {
          idPersona: 5,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "6" },
        defaults: {
          idPersona: 6,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "7" },
        defaults: {
          idPersona: 7,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "8" },
        defaults: {
          idPersona: 8,
          embarazada: true,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "9" },
        defaults: {
          idPersona: 9,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "10" },
        defaults: {
          idPersona: 10,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "11" },
        defaults: {
          idPersona: 11,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "12" },
        defaults: {
          idPersona: 12,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "13" },
        defaults: {
          idPersona: 13,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "14" },
        defaults: {
          idPersona: 14,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "15" },
        defaults: {
          idPersona: 15,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "16" },
        defaults: {
          idPersona: 16,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "17" },
        defaults: {
          idPersona: 17,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "18" },
        defaults: {
          idPersona: 18,
          embarazada: true,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "19" },
        defaults: {
          idPersona: 19,
          embarazada: false,
          estado: true,
        },
      }),
      models.findOrCreate({
        where: { id: "20" },
        defaults: {
          idPersona: 20,
          embarazada: true,
          estado: true,
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

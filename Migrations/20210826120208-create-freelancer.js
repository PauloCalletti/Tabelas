'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Freelancers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      RG: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      CEP: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      curriculo: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Freelancers');
  }
};
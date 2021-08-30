'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Freelancer.hasMany(models.Usuario)
    }
  };
  Freelancer.init({
    nome: DataTypes.STRING, 
    CPF: DataTypes.INTEGER,
    RG: DataTypes.INTEGER,
    CEP: DataTypes.INTEGER,
    curriculo: DataTypes.STRING,
    area: DataTypes.STRING,
    telefone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};
'use strict';
const {
  Model
} = require('sequelize');
const freelancer = require('./freelancer');
module.exports = (sequelize, DataTypes) => {
  class Curriculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curriculo.belongsTo(models.freelancer)
    }
  };
  Curriculo.init({
    habilidades: DataTypes.STRING,
    nota: DataTypes.FLOAT,
    experiencia: DataTypes.INTEGER,
    formacao: DataTypes.STRING,
    nivel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curriculo',
  });
  return Curriculo;
};
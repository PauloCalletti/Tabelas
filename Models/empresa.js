'use strict';
const {
  Model
} = require('sequelize');
const Usuario = require('./Usuario');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresa.hasMany(models.freelancer)
      Empresa.hasMany(models.usuario)
    }
  };
  Empresa.init({
    nome: DataTypes.STRING,
    CNPJ: DataTypes.INTEGER,
    CEP: DataTypes.INTEGER,
    area: DataTypes.STRING,
    telefone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  

  
};  

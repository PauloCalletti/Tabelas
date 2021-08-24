'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Tarefa);
    }
  };
  Usuario.init({
   ID: DataTypes.INTEGER,
   nome: DataTypes.STRING,
   email:DataTypes.STRING,
   senha: DataTypes.PASSWORD,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
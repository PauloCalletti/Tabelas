'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Freelancer)
    }
  };
  Usuario.init({
    ID: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    CPF: DataTypes.INTEGER,
    email: DataTypes.STRING, 
    telefone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};

//cadastra novo usuario
const user = await usuario.create({
  nome: 'alice123',
  isAdmin: true
}, { fields: ['nome'] });
console.log(user.nome); 
console.log(user.isAdmin); 
return user;
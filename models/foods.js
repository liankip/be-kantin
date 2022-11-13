'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  foods.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    foto: DataTypes.STRING,
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    promo: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'foods',
    timestamps: true
  });
  return foods;
};
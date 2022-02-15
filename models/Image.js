const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Ring model
class Image extends Model {}

// Defining the Ring table and it's attributes
Image.init(
  {
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      references: {
        model: 'band',
        key: 'id'
      }
    },
    stone_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      references: {
        model: 'stone',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image'
  }
);

module.exports = Image;
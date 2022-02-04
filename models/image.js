const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Ring model
class Image extends Model {}

// Defining the Ring table and it's attributes
Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'band',
        key: 'id'
      }
    },
    stone_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stone',
        key: 'id'
      }
    },
    stone_band_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stone_band',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'band'
  }
);

module.exports = Image;
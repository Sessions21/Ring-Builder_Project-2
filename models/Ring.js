const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Ring model
class Ring extends Model {}

// Defining the Ring table and it's attributes
Ring.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    size: {
      type: DataTypes.INTEGER
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ring'
  }
);

module.exports = Ring;
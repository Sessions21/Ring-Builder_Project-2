const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Ring model
class Band extends Model {}

// Defining the Ring table and it's attributes
Band.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    metal: {
      type: DataTypes.STRING,
      allowNull: false
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

module.exports = Band;
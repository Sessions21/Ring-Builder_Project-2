const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our stone model
class Stone extends Model {}

// Defining the stone table and it's attributes
Stone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stone'
  }
);

module.exports = Stone;
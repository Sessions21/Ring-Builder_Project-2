const User = require('./User');
const Band = require('./Band');
const Stone = require('./Stone');

Stone.belongsToMany(Band, {
  foreignKey: 'stone_id',
  through: 'stone_band'
})

Band.belongsToMany(Stone, {
  foreignKey: 'band_id',
  through: 'stone_band'
})

User.hasMany(Band, {
  foreignKey: 'user_id'
})

User.hasMany(Stone, {
  foreignKey: 'user_id'
})

module.exports = { User, Band, Stone };
const User = require('./User');
const Band = require('./Band');
const Stone = require('./Stone');
// const Image = require('./Image');
const Ring = require('./Ring');

User.hasMany(Ring, {
  foreignKey: 'user_id'
});

Ring.belongsTo(User, {
  foreignKey: 'user_id'
});

Ring.belongsTo(Stone, {
  foreignKey: 'stone_id'
});

Band.hasMany(Ring,{
  foreignKey: 'band_id'
});

Ring.belongsTo(Band, {
  foreignKey: 'band_id'
});

Stone.hasMany(Ring, {
  foreignKey: 'stone_id'
});

module.exports = { User, Band, Stone, Ring };
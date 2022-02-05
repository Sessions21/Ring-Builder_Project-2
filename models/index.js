const User = require('./User');
const Band = require('./Band');
const Stone = require('./Stone');
// const Image = require('./Image');
const Ring = require('./Ring');

User.hasMany(Ring);
Ring.belongsTo(User);

Stone.belongsToMany(Ring, {
  through: 'ring_stone',
  foreignKey: 'stone_id',
  otherKey: 'ring_id'
});

Band.belongsToMany(Ring, {
  through: 'ring_band',
  foreignKey: 'band_id',
  otherKey: 'ring_id'
});

Ring.hasOne(Stone);
Stone.belongsTo(Ring);

// Ring.hasOne(Band);
// Band.belongsTo(Ring);

// Stone.hasOne(Image);

// Band.hasOne(Image);

// Ring.hasOne(Image);

// Stone.belongsToMany(Ring, {
//   foreignKey: 'stone_id',
// })

// Band.belongsToMany(Stone, {
//   foreignKey: 'band_id',
//   through: 'stone_band'
// })

// Image.belongsTo(Stone, {
//   foreignKey: 'image_id',
//   through: 'stone'
// })

// Image.belongsTo(Band, {
//   foreignKey: 'image_id',
//   through: 'band'
// })

// Stone.belongsTo(Image, {
//   foreignKey: 'stone_id',
//   through: 'image'
// })

// Band.belongsTo(Image, {
//   foreignKey: 'band_id',
//   through: 'image'
// })

User.hasMany(Band, {
  foreignKey: 'user_id'
})

User.hasMany(Stone, {
  foreignKey: 'user_id'
})

module.exports = { User, Band, Stone, Ring };
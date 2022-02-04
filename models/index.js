const User = require('./User');
const Band = require('./Band');
const Stone = require('./Stone');
const Image = require('./Image');

Stone.belongsToMany(Band, {
  foreignKey: 'stone_id',
  through: 'stone_band'
})

Band.belongsToMany(Stone, {
  foreignKey: 'band_id',
  through: 'stone_band'
})

Image.belongsTo(Stone, {
  foreignKey: 'image_id',
  through: 'stone'
})

Image.belongsTo(Band, {
  foreignKey: 'image_id',
  through: 'band'
})

Stone.belongsTo(Image, {
  foreignKey: 'stone_id',
  through: 'image'
})

Band.belongsTo(Image, {
  foreignKey: 'band_id',
  through: 'image'
})

User.hasMany(Band, {
  foreignKey: 'user_id'
})

User.hasMany(Stone, {
  foreignKey: 'user_id'
})


module.exports = { User, Band, Stone, Image };
const { Image } = require('../models');

const imageData = [{
  image: '/images/blackonyx-gold.png',
  band_id: 1,
  stone_id: 1
  },
  {
    image:'/images/blackonyx-silver.png',
    band_id: 2,
    stone_id: 1
  },
  {
    image:'/images/blackonyx-decorative.png',
    band_id: 3,
    stone_id: 1
  },
  {
    image: '/images/rainbowmoonstone-gold.png',
    band_id: 1,
    stone_id: 2
  },
  {
    image: '/images/rainbowmoonstone-silver.png', 
    band_id: 2, 
    stone_id: 2
  },
  {
    image: '/images/rainbowmoonstone-decorative.png',
    band_id: 3,
    stone_id: 2
  },
  {
    image: '/images/turquoise-gold.png',
    band_id: 1,
    stone_id: 3
  },
  {
    image: '/images/turquoise-silver.png', 
    band_id: 2,
    stone_id: 3
  },
  {
    image:'/images/turquoise-decorative.png',
    band_id: 3,
    stone_id: 3
  },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;
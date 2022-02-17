const { Stone } = require('../models');

const stoneData = [{
        type: 'Black Onyx'
    },
    {
        type: 'Rainbow Moonstone'
    },
    {
        type: 'Turquoise'
    }
];

const seedStones = () => Stone.bulkCreate(stoneData);

module.exports = seedStones;
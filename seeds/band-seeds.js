const { Band } = require('../models');

const bandData = [{
        metal: 'Gold'
    },
    {
        metal: 'Silver'
    },
    {
        metal: 'Decorative'
    }
];

const seedBands = () => Band.bulkCreate(bandData);

module.exports = seedBands;
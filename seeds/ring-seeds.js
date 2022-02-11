const { Ring } = require('../models');
// need to remove Image: 5 with the image links

const ringData = [{
    title: 'Black Onyx Gold',
    band_id: 1,
    stone_id: 1
    },
    {
    title: 'Black Onyx Silver',
    band_id: 2,
    stone_id: 1
    },
    {
    title: 'Black Onyx Decorative',
    band_id: 3,
    stone_id: 1
    },
    {
    title: 'Rainbow Moonstone Gold',
    band_id: 1,
    stone_id: 2
    },
    {
    title: 'Rainbow Moonstone Silver',
    band_id: 2,
    stone_id: 2
    },
    {
    title: 'Rainbow Moonstone Decorative',
    band_id: 3,
    stone_id: 2
    },
    {
    title: 'Turquoise Gold',
    band_id: 1,
    stone_id: 3
    },
    {
    title: 'Turquoise Silver',
    band_id: 2,
    stone_id: 3
    },
    {
    title: 'Turquoise Decorative',
    band_id: 3,
    stone_id: 3
    }

];

const seedRings = () => Ring.bulkCreate(ringData);

module.exports = seedRings;
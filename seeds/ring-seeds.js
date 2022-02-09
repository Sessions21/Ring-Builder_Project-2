const { Ring } = require('../models');

const ringData = [{
        title: 'Black Onyx Gold',
        Image: 5,
        ring_id: 1

    },
    {
        title: 'Black Onyx Silver',
        Image: 5,
        ring_id: 2
    },
    {
        title: 'Black Onyx Decorative',
        Image: 5,
        ring_id: 3
    },

    {
    title: 'Rainbow Moonstone Gold',
    Image: 5,
    ring_id: 4

    },
    {
    title: 'Rainbow Moonstone Silver',
    Image: 5,
    ring_id: 5
    },
    {
    title: 'Rainbow Moonstone Decorative',
    Image: 5,
    ring_id: 6
    },
    {
    title: 'Turquoise Gold',
    Image: 5,
    ring_id: 7
    },
    {
    title: 'Turquoise Silver',
    Image: 5,
    ring_id: 8
    },
    {
    title: 'Turquoise Decorative',
    Image: 5,
    ring_id: 9
    }

];

const seedRings = () => Ring.bulkCreate(ringData);

module.exports = seedRings;
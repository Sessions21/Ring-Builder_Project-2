const { Ring } = require('../models');
// need to remove Image: 5 with the image links

const ringData = [{
        title: 'Black Onyx Gold',
        Image: 5

    },
    {
        title: 'Black Onyx Silver',
        Image: 5
    },
    {
        title: 'Black Onyx Decorative',
        Image: 5
    },

    {
    title: 'Rainbow Moonstone Gold',
    Image: 5
    },
    {
    title: 'Rainbow Moonstone Silver',
    Image: 5
    },
    {
    title: 'Rainbow Moonstone Decorative',
    Image: 5
    },
    {
    title: 'Turquoise Gold',
    Image: 5
    },
    {
    title: 'Turquoise Silver',
    Image: 5
    },
    {
    title: 'Turquoise Decorative',
    Image: 5
    }

];

const seedRings = () => Ring.bulkCreate(ringData);

module.exports = seedRings;
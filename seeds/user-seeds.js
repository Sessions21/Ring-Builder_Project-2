const { User } = require('../models');

const userData = [{
        username: 'Scott',
        password: 'Nichols'

    },
    {
        username: 'Berk',
        password: 'Forbes'
    },
    {
        username: 'Lisseth',
        password: 'Diaz'
    },
    {
        username: 'Alexandros',
        password: 'Vlamakis'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
const sequelize = require('../config/connection')
const { User, Ring } = require('../models');

const userData = [{
        username: 'Scott',
        email: 'scott@gmail.com',
        password: 'Nichols'

    },
    {
        username: 'Berk',
        email: 'berk@gmail.com',
        password: 'Forbes'
    },
    {
        username: 'Lisseth',
        email: 'lisseth@gmail.com',
        password: 'Diaz'
    },
    {
        username: 'Alexandros',
        email: 'alexandros@gmail.com',
        password: 'Vlamakis'
    }

];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
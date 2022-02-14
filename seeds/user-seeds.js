const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [{
        username: 'Scott',
        email: 'scott@gmail.com',
        password: 'Nichols',
        phone: 8012345678

    },
    {
        username: 'Berk',
        email: 'berk@gmail.com',
        password: 'Forbes',
        phone: 8019876541
    },
    {
        username: 'Lisseth',
        email: 'lisseth@gmail.com',
        password: 'Diaz',
        phone: 4564564567
    },
    {
        username: 'Alexandros',
        email: 'alexandros@gmail.com',
        password: 'Vlamakis',
        phone: 3216549874
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
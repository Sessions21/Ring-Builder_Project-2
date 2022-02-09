const seedUsers = require('./user-seeds');
const seedRings = require('./ring-seeds');
const seedBands = require('./band-seeds');
const seedStones = require('./stone-seeds')

const sequelize = require('../config/connection');
//async seed function awaits data to be called
const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedRings();
    await seedBands();
    await seedStones();
    process.exit(0);
};

seedAll();
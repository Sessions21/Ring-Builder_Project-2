const seedUsers = require('./user-seeds');
const seedBands = require('./band-seeds');
const seedStones = require('./stone-seeds');
const seedRings = require('./ring-seeds');
const seedImages = require('./image-seeds');

const sequelize = require('../config/connection');
//async seed function awaits data to be called
const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBands();
    await seedStones();
    await seedRings();
    await seedImages();
    process.exit(0);
};

seedAll();
const seedInstruments = require('./instrumentSeeds');
const seedCategories = require('./category-seeds');
const seedReview = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SYNCED -----\n');

    await seedInstruments();
    console.log('\n----- INSTRUMENTS SYNCED -----\n');

    await seedReview();
    console.log('\n----- REVIEWS SYNCED -----\n');

    process.exit(0);
};

seedAll();
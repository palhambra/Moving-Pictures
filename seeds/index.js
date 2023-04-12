const sequelize = require('../config/connection');
const seedInstruments = require('./instrumentSeeds');
const seedUsers = require('./User-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedInstruments();

  await seedUsers();

  process.exit(0);
};

seedAll();

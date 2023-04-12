const { Categories } = require('../models');

const categoryData = [
    {
        category_name: 'Electric',
    },
    {
        category_name: 'Acoustic',
    },
];

const seedCategories = () => Categories.bulkCreate(categoryData);

module.exports = seedCategories; 
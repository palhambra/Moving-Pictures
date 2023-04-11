const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Electric',
    },
    {
        category_name: 'Acoustic',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
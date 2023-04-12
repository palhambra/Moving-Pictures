const sequelize = require('../config/connection');

const { User } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const userData = [
        {
            name: 'Frank',
            email: 'frank@hotmail.com',
            password: 'abc123',
        },
        {
            name: 'Paolo',
            email: 'paolo@aol.com',
            password: 'xyz789',
        },
        {
            name: 'Wes',
            email: 'wes@gmail.com',
            password: 'hij456',
        },
    ];

    for (const user of userData) {
        await User.create(user);
    }

    process.exit(0);
};

seedDatabase();
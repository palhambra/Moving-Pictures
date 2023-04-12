const { User } = require('../models');
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
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
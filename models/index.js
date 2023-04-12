const Instrument = require('./Instrument');
const Categories = require('./Categories')
const User = require('./User');
const Review = require('./Review');

Categories.belongsTo(User, {
    through: 'category_users',
    as: 'users',
    foreignKey:'category_id',
});


User.belongsToMany(Categories,{
    through: 'categories_users',
    as: 'categories',
    foreignKey: 'user_id',
});

Instrument.belongsToMany(User, {
    through: 'instrument_users',
    as: 'users',
    foreignKey: 'instrument_id',
    
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.belongsTo(Categories, {
    foreignKey: 'category_id'
});

Review.belongsTo(Instrument, {
    foreignKey: 'instrument_id'
});

module.exports = {
    Instrument,
    Review,
    Categories,
    User,
};
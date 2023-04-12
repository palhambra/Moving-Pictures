const Instrument = require('./Instrument');
const Categories = require('./Categories')
const User = require('./User');
const Review = require('./Review');



User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});



Review.belongsTo(Instrument, {
    foreignKey: 'instrument_id'
});

Instrument.hasMany(Review, {
    foreignKey: 'instrument_id'
});

Instrument.belongsTo(Categories, {
    foreignKey: 'category_id'
})

Categories.hasMany(Instrument, {
    foreignKey: 'category_id'
})

module.exports = {
    Instrument,
    Review,
    Categories,
    User,
};
const Movie = require('./Movie');
const Television = require('./Television');
const Categories = require('./Categories')
const User = require('./User');
const Review = require('./Review');

Movie.belongsTo(User, {
    foreignKey:'userId',
});

Television.hasMany(Categories, {
    foreignKey: '',
});

Movie.belongsToMany(Categories,{
    through: '',
    as: '',
    foreignKey: '',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Movie.hasMany(Review, {
    foreignKey: 'movie_id'
});

Review.belongsTo(Movie, {
    foreignKey: 'movie_id'
})

module.exports = {
    Movie,
    Television,
    Categories,
    User,
};
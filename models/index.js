const Movie = require('./Movie');
const Television = require('./Television');
const Categories = require('./Categories')
const User = require('./User');

Movie.belongsTo(User, {
    foreignKey:'userId',
});

Television.hasMany(Categories, {
    foreignKey: '',
});

Movie.belongsToMany(Categories,{
    through: ,
    as: '',
    foreignKey: '',
});

module.exports = {
    Movie,
    Television,
    Categories,
    User,
};
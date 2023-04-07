const { Model,DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// const { promises } = require('dns');

class Categories extends Model {}

Categories.init(
    {
        id: {
            type:DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type:DataTypes.STRING,
            allowNull: false,
        },
        genre : {
            type:DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'categories',
    }
);

module.exports = Categories;
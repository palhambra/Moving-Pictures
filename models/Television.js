const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
//  const { promises } = require('dns');

class Television extends Model {}

Television.init(
    {
        id: {
            type:DataTypes.INTEGER,
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
        modelName: 'television',
    }
);

module.exports = Television;
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// const { promises } = require('dns');

class Instrument extends Model {}

Instrument.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name : {
            type:DataTypes.STRING,
            allowNull: false,
        },
        price : {
            type:DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isNumeric: true,
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id',
            },
        },
        image: {
            type: DataTypes.BLOB
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instrument',
    }
);

module.exports = Instrument;
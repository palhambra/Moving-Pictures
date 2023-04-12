const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    instrument_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'instrument',
        key: 'id'
      }
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model{}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        maid_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'maid',
                key: 'id'
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'review'
    }
);

module.exports = Review;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Maid extends Model {}

Maid.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        schedule: {
            type: DataTypes.STRING,
            allowNull: true
        },
        review_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'review',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'maid'
    }
);

module.exports = Maid;
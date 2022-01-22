const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model{}

Schedule.init(
    {

    }
    // {
    //     sequelize,
    //     freezeTableName: true,
    //     timestamps: false,
    //     underscored: true,
    //     modelName: 'schedule'
    //     }
)

module.exports = Schedule;
const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'jsmith',
        email: 'jsmith@gmail.com',
        password: 'password123',
        apartment: 500,
        floor: 5,
        frequency: 'monthly'
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123',
        apartment: 304,
        floor: 3,
        frequency: 'monthly'
    },
    {
        username: 'jdoe',
        email: 'jdoe@gmail.com',
        password: 'password123',
        apartment: 110,
        floor: 1,
        frequency: 'weekly'
    },
    {
        username: 'ivydo',
        email: 'ivydo@none.com',
        password: 'password123',
        apartment: 220,
        floor: 2,
        frequency: 'weekly'
    },
    {
        username: 'hstamper',
        email: 'hstamper@none.com',
        password: 'password123',
        apartment: 404,
        floor: 4,
        frequency: 'weekly'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
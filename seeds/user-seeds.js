const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'jsmith',
        email: 'jsmith@gmail.com',
        password: 'password123'
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        username: 'jdoe',
        email: 'jdoe@gmail.com',
        password: 'password123'
    },
    {
        username: 'ivydo',
        email: 'ivydo@none.com',
        password: 'password123'
    },
    {
        username: 'hstamper',
        email: 'hstamper@none.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
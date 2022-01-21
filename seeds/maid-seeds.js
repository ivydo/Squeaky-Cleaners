const sequelize = require('../config/connection');
const { Maid } = require('../models');

const maiddata = [
    {
        name: 'Bubbly Brenda',
        schedule: 3,
        review_id: [1]
    },
    {
        name: 'Cleaning Cindy',
        schedule: 1,
        review_id: [2]
    },
    {
        name: 'Sparkling Sarah',
        schedule: 2,
        review_id: [3]
    },
    {
        name: 'Mopping Mary',
        schedule: 4,
        review_id: [4]
    },
    {
        name:'Dust-Away Daryl',
        schedule: 5,
        review_id: [5]
    }
];

const seedMaids = () => Maid.bulkCreate(maiddata);

module.exports = seedMaids;
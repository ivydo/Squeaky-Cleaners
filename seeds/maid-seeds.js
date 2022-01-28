//const sequelize = require('../config/connection');
const { Maid } = require('../models');

const maiddata = [
    {
        name: 'Bubbly Brenda',
        review_id: [1, 6, 11]
    },
    {
        name: 'Cleaning Cindy',
        review_id: [2, 7, 13]
    },
    {
        name: 'Sparkling Sarah',
        review_id: [3, 8, 14]
    },
    {
        name: 'Mopping Mary',
        review_id: [4, 9, 14]
    },
    {
        name:'Dust-Away Daryl',
        review_id: [5, 10, 15]
    }
];

const seedMaids = () => Maid.bulkCreate(maiddata);

module.exports = seedMaids;
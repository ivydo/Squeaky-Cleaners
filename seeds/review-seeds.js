const sequelize = require('../config/connection');
const { Review } = require('../models');

const reviewdata = [
    {
        review_text: 'The objective of cleaning is not just to clean, but to feel happiness living within that environment.',
        user_id: 1,
        maid_id: 2
    },
    {
        review_text: 'Nothing inspires cleanliness more than an unexpected guest.',
        user_id: 2,
        maid_id: 4
    },
    {
        review_text: 'We dream of having a clean house — but who dreams of actually doing the cleaning?',
        user_id: 3,
        maid_id: 1
    },
    {
        review_text: 'I make no secret of the fact that I would rather lie on a sofa than sweep beneath it.',
        user_id: 4,
        maid_id: 3
    },
    {
        review_text: "Housework can't kill you, but why take the chance?",
        user_id: 5,
        maid_id: 5
    }
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews();
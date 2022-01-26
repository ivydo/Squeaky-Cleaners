//const sequelize = require('../config/connection');
const { Review } = require('../models');

const reviewdata = [
    {
        title: 'Happiness from cleaning',
        review_text: 'The objective of cleaning is not just to clean, but to feel happiness living within that environment.',
        user_id: 1,
        maid_id: 2
    },
    {
        title: 'Cleanliness',
        review_text: 'Nothing inspires cleanliness more than an unexpected guest.',
        user_id: 2,
        maid_id: 4
    },
    {
        title: 'Dreams of a Clean House',
        review_text: 'We dream of having a clean house — but who dreams of actually doing the cleaning?',
        user_id: 3,
        maid_id: 1
    },
    {
        title: 'No Secrets',
        review_text: 'I make no secret of the fact that I would rather lie on a sofa than sweep beneath it.',
        user_id: 4,
        maid_id: 3
    },
    {
        title: 'Cleaning can kill',
        review_text: "Housework can't kill you, but why take the chance?",
        user_id: 5,
        maid_id: 5
    },
    {
        title: 'Excellent Cleaning',
        review_text: 'The quality of cleaning is excellent. They are dependable. A morning appointment is very important to me and they always keep that time frame. ',
        user_id: 1,
        maid_id: 1
    },
    {
        title: 'Professional Cleaning',
        review_text: "They are efficient, professional, and affordable. Thanks to all!",
        user_id: 2,
        maid_id: 2
    },
    {
        title: 'Thorough Cleaning',
        review_text: "They are very thorough and always ask if there is anything else they can do",
        user_id: 3,
        maid_id: 3
    },
    {
        title: 'Outstanding Service',
        review_text: "The service was outstanding, exceptional, reliable, dependable, and extremely professional.",
        user_id: 4,
        maid_id: 4
    },
    {
        title: 'Diligent worker',
        review_text: "Daryl worked diligently and continually asked questions to clarify what I wanted..",
        user_id: 5,
        maid_id: 5
    },
    {
        title: 'convenience extrdanaire',
        review_text: ' they came by on relatively short notice, and on a holiday, no less. This is an excellent cleaning service and customer service!  They did an amazing job! ',
        user_id: 1,
        maid_id: 1
    },
    {
        title: 'Great idea including housekeeping in the rent',
        review_text: "The cleaning itself was very, very thorough; hardwood floors are gleaming clean by the time she is done!  The house looked great -- I was especially impressed with the oven and refrigerator, which were caked in years of mess, and the landlord was impressed too.",
        user_id: 2,
        maid_id: 2
    },
    {
        title: 'Never leaving this complex',
        review_text: "Great job with kitchen (fridge or oven upon request, but they did some dishes I accidentally left in the sink, and took out the trash!), bathroom, floors (moved all the furniture), dusting (blinds, sorting through all my little piles of things), and the moulding and other gross corners",
        user_id: 3,
        maid_id: 3
    },
    {
        title: 'Great cleaning and availability',
        review_text: "hey did a wonderful job of vaccuuming, cleaning the bathrooms and kitchen, making the bed, everything. There were a few sneaky corners with cobwebs missed, but as I said before, I wasn't there when they arrived to actually point them out and specify that these corners needed extra attention. I was REALLY pleased with the amazing job they did in the bathrooms.",
        user_id: 4,
        maid_id: 4
    },
    {
        title: 'so nice to come home and sparkling clean',
        review_text: " They bring everything they need and when they leave the house sparkles--baseboards, window sills, everything.  also exceeded my expectations by airing out the rugs and doormat, cleaning the hallway, and even cleaning behind the oven.",
        user_id: 5,
        maid_id: 5
    }
    
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;
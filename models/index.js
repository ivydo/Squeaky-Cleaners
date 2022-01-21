//import all models
const User = require('./User');
const Review = require('./Review');
const Maid = require('./Maid');


//create associations

User.hasMany(Review, {
    foreignKey: 'user_id'
});

// Maid.belongsToMany(Review, {
//     through: User,
//     as: 'review_id',
//     foreignKey: 'maid_id'
// });



//DO NOT USE THIS ASSOCIATION GIVE CYCLINIC DEPENDENCIES
// Review.hasOne(Maid, {
//     foreignKey: 'review_id'
// });

//Review.hasOne(User, {
//     foreignKey: 'user_id'
// });

// Review.hasOne(Maid, {
//     foreignKey: 'maid_id'
// })


module.exports = { User, Review, Maid };
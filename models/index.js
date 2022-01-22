//import all models
const User = require('./User');
const Review = require('./Review');
const Maid = require('./Maid');



//create associations

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Maid.hasMany(Review, {
    foreignKey: 'maid_id'
});

Review.belongsTo(User, {
    foreignKey: 'review_id'
});

Review.belongsTo(Maid, {
    foreignKey: 'review_id'
});




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
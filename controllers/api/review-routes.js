const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Review, User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Users.findAll({
    attributes: [
      'id',
      'username',
    ],
    include: [
      {
        model: Review,
        attributes: ['id', 'review_text'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, (req, res) => {
  // expects {--}
  Review.create({
    title: req.body.title,
    post_url: req.body.review_text,
    user_id: req.session.user_id
  })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

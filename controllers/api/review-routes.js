const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Review.findAll()
  .then(dbReviewData => res.json(dbReviewData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// get all users
// router.get('/', (req, res) => {
//   console.log('======================');
//   Users.findAll({
//     attributes: [
//       'id',
//       'username',
//     ],
//     include: [
//       {
//         model: Review,
//         attributes: ['id', 'review_text'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbReviewData => res.json(dbReviewData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Review.create({
      review_text: req.body.review_text,
      maid_id: req.body.maid_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbMaidData => res.json(dbMaidData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});


// router.post('/', withAuth, (req, res) => {
//   // expects {--}
//   Review.create({
//     title: req.body.title,
//     post_url: req.body.review_text,
//     user_id: req.session.user_id
//   })
//     .then(dbReviewData => res.json(dbReviewData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.delete('/:id', withAuth, (req, res) => {
  Review.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbReviewData => {
        if (!dbReviewData) {
          res.status(404).json({ message: 'No review found with this id!' });
          return;
        }
        res.json(dbReviewData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;

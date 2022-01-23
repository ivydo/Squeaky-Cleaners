const router = require('express').Router();
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

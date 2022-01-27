const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid,  User,  Review} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const maidRows = await Maid.findAll({
      attributes: [
        'id',
        'name',
        'schedule',
      ],
      include: [
        {
          model: Review,
          attributes: ['id', 'title', 'review_text'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ]
    });

    const reviewRows = await Review.findAll({
      where: {
        user_id: req.session.id
      },
      attributes: [
        'id',
        'title',
        'review_text',
        'maid_id'
      ],
      include: [
        {
          model: Maid,
          attributes: ['id', 'name'],
        },
      ],
    })

    const maids = maidRows.map(maid => maid.get({ plain: true }));
    const reviews = reviewRows.map(review => review.get({ plain: true }));

    res.render ('dashboard', {
      maids,
      reviews,
      loggedIn: true,
      style: "dashboard.css"
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

  

//to edit review from user logged in
router.get('/edit/:id', (req, res) => {
  Review.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'review_text',
      ],
      include: [{
        model: Maid,
        attributes: ['id', 'name'],
        // include: {
        //   model: User,
        //   attributes: ['username']
        // }
      }, ]
    })
    .then(dbReviewData => {
      if (dbReviewData) {
        const review = dbReviewData.get({
          plain: true
        });

        res.render('edit-review', {
          review,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // Wrapping in try/catch in order to handle any database errors.
  try {
    // Query database for all Maids.
    const maidRows = await Maid.findAll({
      attributes: [
        'id',
        'name',
        
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
​
    // Query database for all Reviews for the currently authenticated user.
    const reviewRows = await Review.findAll({
      where: {
        // User id connected to session.
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'review_text',
        'maid_id',
      ],
      include: [
        {
          model: Maid,
          attributes: ['id', 'name'],
        },
      ],
    })

    // Clean up Sequelize records so we can pass them into Handlebars.
    const maids = maidRows.map(maid => maid.get({ plain: true }));
    const reviews = reviewRows.map(review => review.get({ plain: true }));

    // Render dashboard.handlebars, passing in maids and reviews data.
    res.render(
      'dashboard',
      {
        maids,
        reviews,
        loggedIn: true,
        style: "dashboard.css"
      });
  } catch (error) {
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
      include: [
        {
          model: Maid,
          attributes: ['id', 'name'],
          // include: {
          //   model: User,
          //   attributes: ['username']
          // }
        },
      ]
    })
    .then(dbReviewData => {
      if (dbReviewData) {
        const review = dbReviewData.get({ plain: true });

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
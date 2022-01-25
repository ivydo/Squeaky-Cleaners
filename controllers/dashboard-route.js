const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Maid.findAll({
      // where: {
      //   // use the ID from the session
      //   maid_id: req.session.maid_id
      // },
      attributes: [
        'id',
        'name',
        'schedule',
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
        // {
        //   model: User,
        //   attributes: ['username']
        // }
      ]
    })
      .then(dbMaidData => {
        // serialize data before passing to template
        const maids = dbMaidData.map(maid => maid.get({ plain: true }));
        res.render('dashboard', { maids, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  });

  //list reviews from logged in user AND ability to edit/delete
  router.get('/', (req, res) => {
    Review.findAll({
      where: {
        //user id connected to session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'review_text',
        'maid_id',
        'created_at'
      ],
      include: [
        {
          model: Maid,
          attributes: ['id', 'name']
        }
      ],
    })
    .then(dbReviewData => {
      //serialize data before passing to template
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      res.render('dashboard', { reviews, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  //to edit review from user logged in
  router.get('/edit/:id', (req, res) => {
    Review.findByPk(req.params.id, {
      attributes: [
        'id',
        'review_text',
        'created_at'
      ],
      include: [
        {
          model: Maid,
          attributes: ['id', 'name']
        }
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
        res.status(500).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });


  module.exports = router;
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Maid.findAll({
      where: {
        // use the ID from the session
        maid_id: req.session.maid_id
      },
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
        res.render('dashboard', { reviews, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  });


  module.exports = router;
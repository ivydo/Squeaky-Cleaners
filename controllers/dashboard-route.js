const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Maid.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Review,
          attributes: ['id', 'review_text', 'maid_id', 'user_id', 'created_at'],
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
      .then(dbMaidData => {
        // serialize data before passing to template
        const maids = dbMaidData.map(maid => maid.get({ plain: true }));
        res.render('dashboard', { reviews, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
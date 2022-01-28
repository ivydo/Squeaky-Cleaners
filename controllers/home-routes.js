const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, Review, User } = require('../models');


router.get('/', (req, res) => {
  res.render('homepage', {
    style: "./homepage.css"
  }); 
  });

//create route to login form
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', {
    style: "login.css"
  });
});

//single maid route
router.get('/maid/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  Maid.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      
    ],
    include: [
      {
        model: Review,
        attributes: ['id', 'title', 'review_text', 'maid_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
    ]
  }).then(dbMaidData => {
    if (!dbMaidData) {
      res.status(404).json({ message: 'No maid found with this id' });
      return;
    }

    const maid = dbMaidData.get({ plain: true });

    console.log(maid);

    res.render('single-maid', { 
      maid, 
      loggedIn: req.session.loggedIn 
    });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

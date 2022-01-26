const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, Review } = require('../models');


router.get('/', (req, res) => {
  res.render('homepage'); 
  });


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
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
      //'schedule'
    ],
    include: [
      {
        model: Review,
        attributes: ['id', 'review_text', 'maid_id', 'user_id'],
        // include: {
        //   model: User,
        //   attributes: ['username']
        // }
      },
      // {
      //   model: User,
      //   attributes: ['username']
      // }
    ]
  }).then(dbMaidData => {
    if (!dbMaidData) {
      res.status(404).json({ message: 'No maid found with this id' });
      return;
    }

    const maid = dbMaidData.get({ plain: true });

    console.log(maid);

    res.render('single-maid', { maid });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

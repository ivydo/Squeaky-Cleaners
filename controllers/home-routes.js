const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
  res.render('homepage', {
    style: "./homepage.css"
  }); 
  });


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    style: "login.css"
  });
});

module.exports = router;

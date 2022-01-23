const router = require('express').Router();
const sequelize = require('../config/connection');
const { Maid, User, Review } = require('../models');


router.get('/', (req, res) => {
    Review.findAll()
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;
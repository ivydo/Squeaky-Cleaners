const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Maid, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all maids
router.get('/', (req, res) => {
    console.log('======================');
    Maid.findAll({
      attributes: [
        'id',
        'name',
        'schedule'
      ],
      //order: [['created_at', 'DESC']],
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
    })
      .then(dbMaidData => res.json(dbMaidData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/:id', (req, res) => {
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
    })
      .then(dbMaidData => {
        if (!dbMaidData) {
          res.status(404).json({ message: 'No maid found with this id' });
          return;
        }
        res.json(dbMaidData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  module.exports = router;
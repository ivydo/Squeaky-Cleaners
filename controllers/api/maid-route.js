const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Maid, User, Review, } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all maids
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'title',
        'created_at'
      ],
      order: [['created_at', 'DESC']],
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
      .then(dbMaidData => res.json(dbMaidData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at'
      ],
      include: [
        {
          model: Comment,
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
        if (!dbMaidData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  module.exports = router;
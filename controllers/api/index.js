const router = require('express').Router();
const reviewRoutes = require('./review-routes');
const maidRoutes = require('./maid-route');
const userRoutes = require('./user-routes');



router.use('/reviews', reviewRoutes);
router.use('/maids', maidRoutes);
router.use('/users', userRoutes);

module.exports = router;
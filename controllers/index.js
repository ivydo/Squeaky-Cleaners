const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoute = require('./dashboard-route.js');
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);



router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoute);

router.use((req, res) => {
    res.status(404).end();
  });

  module.exports = router;
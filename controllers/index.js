const router = require('express').Router();

// Need to add in routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

// Need to add in router.use
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
const router = require('express').Router();

// Need to add in routes
const apiRoutes = require('./api');

// Need to add in router.use
router.use('/api', apiRoutes);

module.exports = router;
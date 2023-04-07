const router = require('express').Router();
const userRoutes = require('./userRoutes')
// TODO: add route
// const Routes = require('Routes') placeholder

// TODO: add router.use
router.use('/users', userRoutes)

module.exports = router;
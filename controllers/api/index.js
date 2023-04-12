const router = require('express').Router();
const userRoutes = require('./userRoutes');
const instrumentRoutes = require('./instrumentRoutes');
const reviewRoutes = require('./reviewRoutes');
const categoryRoutes = require('./categoryRoutes');
// TODO: add route
// const Routes = require('Routes') placeholder

// TODO: add router.use
router.use('/users', userRoutes);
router.use('/instruments', instrumentRoutes);
router.use('/reviews', reviewRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
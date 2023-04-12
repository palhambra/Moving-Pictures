const router = require('express').Router();
const { Review, User, Instrument } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({ include: User, Instrument })
    res.json(reviewData);
  } catch (err) {
    res.status(500).json(err)
  
  }
})

module.exports = router;
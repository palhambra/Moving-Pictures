const router = require('express').Router();
// const { User } = require('../models');
const { Instrument } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const instrumentData = await Instrument.findAll();

    const instruments = instrumentData.map((instrument) => instrument.get({ plain:true }));

    res.render('homepage', {
      instruments
    });
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
 
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

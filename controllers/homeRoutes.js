const router = require('express').Router();
// const { User } = require('../models');
// const { Instrument }
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const instrumentData = await Instrument.
//   }
// })

router.get('/login', (req, res) => {
 
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
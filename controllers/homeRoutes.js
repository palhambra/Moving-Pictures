const router = require('express').Router();
// const { User } = require('../models');
const { Instrument, Categories } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const instrumentData = await Instrument.findAll();

    const instruments = instrumentData.map((instrument) => instrument.get({ plain:true }));

    res.render('homepage', {
      instruments,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
 
  if (req.session.logged_in) {
    res.redirect('/upload');
    return;
  }

  res.render('login');
});



router.get('/upload', async (req, res) => {
  if (req.session.logged_in) {
  try {
    
    const instrumentData = await Instrument.findAll({
      include: {
        model: Categories,
        attributes: ['category_name'],
        distinct: true
      }
    });
    const instruments = instrumentData.map((instrument) => instrument.get({ plain:true }));

    
    res.render('upload', {
      instruments,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
} else {
  res.render('login', { message: 'You must be logged in to upload instruments' });
}
});

router.get('/profile/:id', async (req, res) => {
  try {
    const instrumentData = await Instrument.findByPk(req.params.id);
    if (!instrumentData) {
      res.status(404).json({ message: 'Instrument not found' });
      return;
    }
    const instrument = instrumentData.get({ plain: true });
    res.render('profile', { ...instrument,
      loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:category_name', async (req, res) => {
  try {
    const categoryData = await Categories.findOne({
      where: { category_name: req.params.category_name },
      include: [{ model: Instrument }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    const category = categoryData.get({ plain: true });
    res.render('homepage', { ...category,
      loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

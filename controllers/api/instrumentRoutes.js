const router = require('express').Router();
const path = require('path')
const { Instrument, Categories, User, Review } = require('../../models');
const multer = require('multer');
const sharp = require('sharp');


const upload = multer({ dest: 'public/images' });

const fs = require('fs');

router.get('/', async (req, res) => {
 try {
  const instrumentData = await Instrument.findAll({
    include: [{model: Categories}, {model: Review, include: [User]}],
  });
  res.status(200).json(instrumentData)
 
 } catch (err) {
  res.status(500).json(err);
  console.log(err)
 }
});


router.get('/:id', async (req, res) => {
  
  try {
    const instrumentData = await Instrument.findByPk(req.params.id, {
      include: [{model: Category}, {model: Review, include: [User]}],
    });
    
    if (!instrumentData) {
      res.status(404).json({message: 'No Instrument has been found with that ID!'});
      return;
    }
    res.status(200).json(instrumentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.post('/', (req, res) => {
//   /* req.body should look like this...
//     {
//       instrument_name: "Guitar",
//       description: "A stringed musical instrument.",
//       price: 500.00,
//       stock: 5,
//       category_id: 1
//     }
//   */
//   Instrument.create(req.body)
//     .then((instrument) => {
//       res.status(200).json(instrument);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });



router.post('/', upload.single('image'), async (req, res) => {
  try { 
    const image = req.file.filename;
    const instrument = await Instrument.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
      image: image + '.jpg',
    });

    const oldPath = path.join(req.file.destination, req.file.filename);
    const newPath = path.join(req.file.destination, image + '.jpg');
    fs.renameSync(oldPath, newPath);
    console.log(instrument);
    res.status(201).json(instrument);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
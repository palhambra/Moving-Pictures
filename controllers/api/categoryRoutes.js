const router = require('express').Router();
const { Categories, Instrument } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const categories = await Categories.findAll({include: Instrument })
        res.json(categories);
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const category = await Categories.findByPk(req.params.id, {
            include: [{model: Instrument}],
        });
        if (!category) {
            res.status(404).json({ message: 'Category can not be found!'});
            return;
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const newCategory = await Categories.create({category_name: req.body.category_name});
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
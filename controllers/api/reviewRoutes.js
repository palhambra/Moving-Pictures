const router = require('express').Router();
const { Review } = require('../../models');

router.post('/', withAuth, as)
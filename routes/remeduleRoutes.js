const express = require('express');
const { getRemedules, createRemedule } = require('../controllers/remeduleController');
const router = express.Router();

router.get('/', getRemedules);
router.post('/', createRemedule);

module.exports = router;

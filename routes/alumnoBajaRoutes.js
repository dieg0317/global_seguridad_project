const express = require('express');
const { getAlumnosBaja, createAlumnoBaja } = require('../controllers/alumnoBajaController');
const router = express.Router();

router.get('/', getAlumnosBaja);
router.post('/', createAlumnoBaja);

module.exports = router;

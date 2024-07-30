const express = require('express');
const { getAlumnos, createAlumno } = require('../controllers/alumnoController');
const router = express.Router();

router.get('/', getAlumnos);
router.post('/', createAlumno);

module.exports = router;

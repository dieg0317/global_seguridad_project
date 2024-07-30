const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidopa: { type: String, required: true },
    apellidoma: { type: String, required: true },
    promedio: { type: Number, required: true }
});

module.exports = mongoose.model('Alumno', alumnoSchema);

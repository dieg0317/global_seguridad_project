const mongoose = require('mongoose');

const remeduleSchema = new mongoose.Schema({
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
    materia: { type: String, required: true },
    carrera: { type: String, required: true },
    estatus: { type: String, enum: ['pagado', 'no pagado'], required: true }
});

module.exports = mongoose.model('Remedule', remeduleSchema);

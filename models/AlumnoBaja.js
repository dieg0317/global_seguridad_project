const mongoose = require('mongoose');

const alumnoBajaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidopa: { type: String, required: true },
    promedio: { type: Number, required: true }
});

module.exports = mongoose.model('AlumnoBaja', alumnoBajaSchema);

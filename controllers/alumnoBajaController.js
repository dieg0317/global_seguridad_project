const AlumnoBaja = require('../models/AlumnoBaja');

exports.getAlumnosBaja = async (req, res) => {
    try {
        const alumnosBaja = await AlumnoBaja.find();
        res.json(alumnosBaja);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAlumnoBaja = async (req, res) => {
    const { nombre, apellidopa, promedio } = req.body;
    try {
        const nuevoAlumnoBaja = new AlumnoBaja({ nombre, apellidopa, promedio });
        await nuevoAlumnoBaja.save();
        res.status(201).json(nuevoAlumnoBaja);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Añadir más controladores según sea necesario...

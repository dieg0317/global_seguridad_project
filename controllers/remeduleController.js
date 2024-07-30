const Remedule = require('../models/Remedule');

exports.getRemedules = async (req, res) => {
    try {
        const remedules = await Remedule.find().populate('alumno');
        res.json(remedules);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createRemedule = async (req, res) => {
    const { alumno, materia, carrera, estatus } = req.body;
    try {
        const nuevoRemedule = new Remedule({ alumno, materia, carrera, estatus });
        await nuevoRemedule.save();
        res.status(201).json(nuevoRemedule);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Añadir más controladores según sea necesario...

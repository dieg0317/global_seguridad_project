const Alumno = require('../models/Alumno');

exports.getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAlumno = async (req, res) => {
    const { nombre, apellidopa, apellidoma, promedio } = req.body;
    try {
        const nuevoAlumno = new Alumno({ nombre, apellidopa, apellidoma, promedio });
        await nuevoAlumno.save();
        res.status(201).json(nuevoAlumno);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Añadir más controladores según sea necesario...

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const alumnoRoutes = require('./routes/alumnoRoutes');
const remeduleRoutes = require('./routes/remeduleRoutes');
const alumnoBajaRoutes = require('./routes/alumnoBajaRoutes');

const app = express();

app.use(express.json());

app.use('/api/alumnos', alumnoRoutes);
app.use('/api/remedules', remeduleRoutes);
app.use('/api/alumnos_baja', alumnoBajaRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error(err);
    });

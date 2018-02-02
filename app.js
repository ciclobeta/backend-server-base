// Requires: importación de librerias
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();

//coenctar la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/clinicaVetDB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos:\x1b[32m %s \x1b[0m', 'onLine');
});

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada con exito'
    })
});

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000:\x1b[32m %s \x1b[0m', 'onLine');
});
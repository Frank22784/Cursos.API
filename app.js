var express = require('express');
var mysql = require('mysql2');

var app = express();
const puerto = process.env.PUERTO || 3000;
app.listen(puerto, function() {
    console.log('Conexión establecida en el puerto ' + puerto);
});

app.get('/', function(req, res) {
    res.send('Ruta de inicio');
});
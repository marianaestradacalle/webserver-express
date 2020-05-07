const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

// Heroku
const port = process.env.PORT || 3000;

// Express HBS engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'mariana'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
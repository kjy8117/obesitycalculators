const express = require('express');
const app = express();
const path = require('path');
app.use(express.static("views"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log('connected')
})


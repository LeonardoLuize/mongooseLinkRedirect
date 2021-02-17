const express = require('express');
const app = express();
const PORT = 3000;
const linkRoute = require('./routes/linkRoute')
const path = require('path');
const mongoose = require('mongoose');

const db = mongoose.connection;



mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


db.on('error', () => { console.log("Houve um erro!")})

db.once('open', () => { console.log("Banco Carregado!") })


app.use("/", linkRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})
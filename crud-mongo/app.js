const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Conexão a base de dados
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cyvyx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Base de dados conectada!');
}).catch((error) => {
    console.log(error);
});

// motor de templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// Rotas Web
app.use('/', require('./routes/routes-web'));
app.use('/pets', require('./routes/routes-pets'));

// Rota não encontrada
app.use((req, res, next) => {
    // res.status(404).sendFile(__dirname + "/public/404.html");
    res.status(404).render("404", {bodyTitle: "Página não encontrada!", bodyContent: "Essa página não existe!"});
});

app.listen(port, () =>{
    console.log('Servidor rodando na porta ' + port);
});



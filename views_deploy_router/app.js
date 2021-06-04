const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

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

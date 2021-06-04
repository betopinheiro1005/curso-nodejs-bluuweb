const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"));

// Rotas

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/services', (req, res) => {
    res.send('Página de serviços!');
});

// Rota não encontrada

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () =>{
    console.log('Servidor rodando na porta ' + port);
});

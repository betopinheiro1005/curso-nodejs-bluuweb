const express = require('express');
const router = express.Router();

// Rotas

router.get('/', (req, res) => {
    res.render("index", {bodyTitle: "Página inicial", bodyContent: "Seja bem-vindo ao nosso site!"});
});

router.get('/services', (req, res) => {
    res.render("services", {bodyTitle: "Página de Serviços", bodyContent: "Oferecemos os melhores serviços aos nossos clientes!"});
});

router.get('/contact', (req, res) => {
    res.render("contact", {bodyTitle: "Página de Contato", bodyContent: "Entre em contato conosco!"});
});

module.exports = router;

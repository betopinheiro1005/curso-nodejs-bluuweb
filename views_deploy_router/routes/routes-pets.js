const express = require('express');
const router = express.Router();

// Rotas

router.get('/', (req, res) => {
    res.render("pets/index", {
        arrayPets: [
            {id: 1, nome: "Brisa", especie: "gato", sexo: 'F'},
            {id: 2, nome: "Fred", especie: "gato", sexo: 'M'},
            {id: 3, nome: "Teo", especie: "gato", sexo: 'M'},
            {id: 4, nome: "Benjamin", especie: "gato", sexo: 'M'},
            {id: 5, nome: "Tiquinho", especie: "gato", sexo: 'M'},
            {id: 6, nome: "Siloeh", especie: "cachorro", sexo: 'F'},
            {id: 7, nome: "Valentim", especie: "cachorro", sexo: 'M'},
            {id: 8, nome: "Roque", especie: "cachorro", sexo: 'M'}
        ]
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Rotas

router.get('/', async (req, res) => {

    try {
        const arrayPetsDB = await Pet.find();
        console.log(arrayPetsDB);

        res.render("pets/index", {arrayPets: arrayPetsDB});

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;

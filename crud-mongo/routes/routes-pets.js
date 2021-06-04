const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Rotas

router.get('/', async (req, res) => {

    try {
        const arrayPetsDB = await Pet.find();
        res.render("pets/index", {arrayPets: arrayPetsDB});
    } catch (error) {
        console.log(error);
    }
});

router.get('/create', (req, res) => {
    res.render("pets/create");
});

router.post('/', async (req, res) => {
    const body = req.body

    try {
        //const petDB = new Pet(body);
        //await petDB.save();
        
        await Pet.create(body);
        
        res.redirect('/pets');
        // console.log("Pet cadastrado: ", petDB);
    } catch (error) {
        console.log(error);
    }

});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const petDB = await Pet.findOne({ _id: id });
        console.log(petDB);
        res.render('pets/show', {
            pet: petDB,
            error: false
        });
    } catch (error) {
        console.log(error);
        res.render('pets/show', {
            error: true,
            message: 'Não encontrado o id selecionado!'
        });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id);
    try {
        const petDB = await Pet.findByIdAndDelete({ _id: id });
        console.log(petDB);
        if(!petDB){
            res.json({
                status: false,
                message: "Erro ao excluir o documento!"
            });
        } else {
            res.json({
                status: true,
                message: "Eliminado com sucesso!"
            });
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        const petDB = await Pet.findOne({ _id: id });
        console.log(petDB);
        res.render('pets/edit', {
            pet: petDB,
            error: false
        });
    } catch (error) {
        console.log(error);
        res.render('pets/edit', {
            error: true,
            message: 'Não encontrado o id selecionado!'
        });
    }
});

router.put('/:id', async (req, res) => {

    const id = req.params.id
    const body = req.body
    
    try {

        const petDB = await Pet.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(petDB)

        res.json({
            estado: true,
            mensaje: 'Editado'
        })
        
    } catch (error) {
        console.log(error)
        
        res.json({
            estado: false,
            mensaje: 'Fallamos!!'
        })
    }
})

module.exports = router;

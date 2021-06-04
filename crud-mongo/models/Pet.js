const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    nome: String,
    especie: String,
    sexo: String
});

// Criar model
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;

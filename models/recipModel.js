const mongoose = require("mongoose")

const recipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    ingredients: {
        type: [String],
        required: [true, "les ingredients sont requis"]
    },
    time: {
        type: Number,
        required: [true, "le temps est requis"]
    },
    dificult:{
        type: String,
        required: [true, "la difficulté est requise"]
    }
})

const recipModel= mongoose.model('recips', recipSchema)
module.exports = recipModel
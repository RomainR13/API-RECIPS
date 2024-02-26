const mongoose = require("mongoose")

const autorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    recips: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "recips"
        }],
    }
})

const autorModel = mongoose.model('autors', autorSchema)
module.exports = autorModel
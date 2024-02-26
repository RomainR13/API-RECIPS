const express = require('express');
const mongoose = require("mongoose")
const autorRouter = require('./router/autorRouter')
const recipRouter= require('./router/recipRouter')
const app = express();

app.use(express.json()) // permet de pouvoir recuperer les données client
app.use(recipRouter)    // permet a express d'utiliser le fichier de route
app.use(autorRouter)

app.listen(3000, (err) => {
    if (!err) {
        console.log("le serveur ecoute sur le port 3000")
    } else {
        console.log(err);
    }
})

mongoose.connect('mongodb://localhost:27017/apirecip')
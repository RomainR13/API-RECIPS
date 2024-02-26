const recipRouter = require("express").Router()
const recipController = require("../controllers/recipController")

recipRouter.post('/autors/:idAutor/recips', recipController.postRecip)
recipRouter.get('/recips', recipController.getRecips)
recipRouter.get('/recips/:id', recipController.getOneRecip)
recipRouter.delete('/autors/:idAutor/recips/:idRecips', recipController.deleteRecip)
recipRouter.put('/recips/:id', recipController.putRecip)


module.exports= recipRouter
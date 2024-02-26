const autorRouter = require("express").Router()
const autorController = require('../controllers/autorController')


autorRouter.get('/autors', autorController.getAutors)
autorRouter.get('/autors/:id', autorController.getAutorById)
autorRouter.delete('/autors/:id', autorController.deleteAutorById)
autorRouter.post('/autors', autorController.postAutors)

module.exports = autorRouter
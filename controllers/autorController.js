const autorModel = require('../models/autorModel')

exports.getAutors = async (req, res)=>{
    try {
       const autors = await autorModel.find()
       res.json(autors)
    } catch (error) {
        res.json(error.message)
    }
}

exports.getAutorById = async (req, res)=>{
    try {
       const autor = await autorModel.findOne({_id: req.params.id}).populate("recips")
       res.json(autor)
    } catch (error) {
        res.json(error.message)
    }
}

exports.deleteAutorById = async (req,res)=>{
    try {
        const autorDeleted = await autorModel.deleteOne({_id: req.params.id}).populate('autors')
        res.json(autorDeleted)
    } catch (error) {
        res.json(error)
    }
}

exports.postAutors = async (req, res)=>{
    try {
       const autors = new autorModel(req.body)
       autors.validateSync()
       await autors.save()
       res.json("L'auteur a bien été sauvegardé")
    } catch (error) {
        res.json(error.message)
    }
}
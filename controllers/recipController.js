const recipModel = require('../models/recipModel')
const autorModel = require('../models/autorModel')

exports.postRecip = async (req,res)=>{
    try {
        const autor = autorModel.findOne({_id: req.params.idAutors})    
        if(autor){
            const newRecip = new recipModel(req.body)
            newRecip.validateSync()
            await newRecip.save()
            await autorModel.updateOne({_id: req.params.idAutor}, { $push: { recips: newRecip._id }})
            res.json("Votre recette a bien été créée")
        }    else{
            res.json("aucun auteur trouvé")
        }
        
    } catch (error) {
        console.log(error);
        res.json(error)
    }

}

exports.getRecips = async (req,res)=>{
    try {
        let recips = null
        if (req.query) {
            recips = await recipModel.find(req.query)
        }else{
            recips = await recipModel.find()
        }
        res.json(recips)
        
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

exports.getOneRecip = async (req,res)=>{
    try {
        const recip = await recipModel.findOne({_id: req.params.id})
        res.json(recip)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteRecip = async (req,res)=>{
    try {
        const autor = autorModel.findOne({_id: req.params.idAutor})
        if (autor) {
            const recipDeleted = await recipModel.deleteOne({_id: req.params.idRecips})
            await autorModel.updateOne({_id: req.params.idAutor}, { $pull: { recips: req.params.idRecips }})
            res.json(recipDeleted)
        }else{
            res.json('aucun auteur existant avec cet id')
        }

       
    } catch (error) {
        res.json(error)
    }
}



exports.putRecip = async (req,res)=>{
    try {
        const recipUpdate = await recipModel.updateOne({_id: req.params.id}, req.body)
        res.json(recipUpdate)
    } catch (error) {
        res.json(error)
    }
}
const Bread = require('../models/Bread')

// function for getting all of the bread database
async function getAllBread(req,res) {
    try {
        const bread = await Bread.find()
        res.json(bread)
    } catch (error) {
        console.log(`error fetching bread:`, error)
        res.json({'message': 'error fetching bread'})        
    }
}

//function for getting a specific bread
async function getBreadById(req,res) {
    try {
        const { id } = req.params
        const bread = await Bread.findById(id)
        res.json(bread)
    } catch (error) {
        console.log(`error fetching bread by id:`, error)
        res.json({'message': 'error fetching bread by id'})    
    }

}

async function createBread(req,res) {
    try {
        await new Bread(req.body).save()
        res.status(201).json({'message': 'Bread created'})
    } catch (error) {
        console.log(`error creating bread:`, error)
        res.json({'message': 'error creating bread'})     
    }
}

module.exports = {
    getAllBread,
    getBreadById,
    createBread
}
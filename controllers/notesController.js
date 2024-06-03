
const db = require('../models/dbconfig')

const Notes = db.notes

// add Notes
const addNotes=  (async (req,res)=>{
    let info = {
        title: req.body.title,
        description: req.body.description
    }
    const notes = await Notes.create(info)
    res.status(200).send(notes)
})

// Update Notes
const updateNotes = (async(req,res)=>{
    let id = req.params.id
    const notes = await Notes.findOne({where :{id : id}})
    res.status(200).send(notes)
})

// Get notes by id

// get all notes

// delete notes by id

module.exports = {
    addNotes,
    updateNotes,
}
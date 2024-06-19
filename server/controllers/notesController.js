
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

// Get notes by id
const getNotes = (async(req,res)=>{
    let id = req.params.id
    const notes = await Notes.findOne({where :{id : id}})
    console.log(notes)
    res.status(200).send(notes)
})

// get all notes

const getAllNotes = async (req, res) => {
    try {
        // Fetch notes from the database
        const notes = await Notes.findAll({
            attributes: [
                'title', // Correct spelling is attributes
                'description'
            ]
        });

        // Send the response with the fetched notes
        res.status(200).json(notes);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching notes:", error);
        res.status(500).send("An error occurred while fetching notes");
    }
};


// Update Notes

const updateNotes = (async (req,res)=>{
    let id = req.params.id;
    const updatenotes = await Notes.update(req.body, {where: {id:id}})
    res.status(200).send(updatenotes);
})

// delete notes by id

const deleteNotes = (async (req,res)=>{
    let id = req.params.id;
    const deletenotes = await Notes.destroy({where: {id:id}})
    res.status(200).send("Deleted !")
})

module.exports = {
    addNotes,
    getNotes,
    getAllNotes,
    updateNotes,
    deleteNotes
}
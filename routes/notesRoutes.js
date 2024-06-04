
const NotesController = require('../controllers/notesController')
const NotesRouter = require('express').Router()

NotesRouter.post('/add-notes',NotesController.addNotes)
NotesRouter.get('/allNotes',NotesController.getAllNotes)

NotesRouter.get('/:id',NotesController.getNotes)

NotesRouter.put('/:id',NotesController.updateNotes)
module.exports = NotesRouter
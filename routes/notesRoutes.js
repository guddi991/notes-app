
const NotesController = require('../controllers/notesController')
const NotesRouter = require('express').Router()

NotesRouter.post('/add-notes',NotesController.addNotes)
NotesRouter.get('/:id',NotesController.updateNotes)

module.exports = NotesRouter
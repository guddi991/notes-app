
const NotesController = require('../controllers/notesController')
const NotesRouter = require('express').Router()

NotesRouter.post('/',NotesController.addNotes)

module.exports = NotesRouter
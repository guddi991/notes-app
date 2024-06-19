const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 5000;
const path = require('path')

var corOptions = {
    origin: 'http://localhost:5000'
}

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes
const NotesRouter = require('./routes/notesRoutes')

app.use('/api/notes',NotesRouter)

app.use('/',(req,res)=>{
    const homePath = path.join(__dirname, 'frontend', 'index.html');
    res.sendFile(homePath);
})

app.listen(PORT, ()=>{
    console.log("server is running on "+PORT)
})


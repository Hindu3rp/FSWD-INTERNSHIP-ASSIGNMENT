const express = require('express')
const app = express()

app.use(express.json())

app.use('/tasks', require('./routes/tasks'))

app.listen(3000, ()=>{
    console.log("Task API running on port 3000")
})
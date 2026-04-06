const express = require('express')
const router = express.Router()

let tasks = []

// CREATE task
router.post('/', (req, res) => {
    const task = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        status: "pending"
    }

    tasks.push(task)
    res.json(task)
})

// READ all tasks
router.get('/', (req, res) => {
    res.json(tasks)
})

// READ single task
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id)
    res.json(task)
})

// UPDATE task
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id)

    task.title = req.body.title
    task.description = req.body.description
    task.status = req.body.status

    res.send("Task updated")
})

// DELETE task
router.delete('/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id)
    res.send("Task deleted")
})

module.exports = router
const express = require('express')
const router = express.Router()

let authors = []

router.get('/', (req, res) => {
    res.json(authors)
})

router.post('/', (req, res) => {
    authors.push(req.body)
    res.send("Author added")
})

router.put('/:id', (req, res) => {
    const index = authors.findIndex(a => a.id == req.params.id)
    authors[index] = req.body
    res.send("Author updated")
})

router.delete('/:id', (req, res) => {
    authors = authors.filter(a => a.id != req.params.id)
    res.send("Author deleted")
})

module.exports = router
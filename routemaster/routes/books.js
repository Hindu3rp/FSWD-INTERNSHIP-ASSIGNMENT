const express = require('express')
const router = express.Router()

let books = []

// GET all books
router.get('/', (req, res) => {
    res.json(books)
})

// GET by id
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id)
    res.json(book)
})

// POST
router.post('/', (req, res) => {
    books.push(req.body)
    res.send("Book added")
})

// PUT
router.put('/:id', (req, res) => {
    const index = books.findIndex(b => b.id == req.params.id)
    books[index] = req.body
    res.send("Book updated")
})

// DELETE
router.delete('/:id', (req, res) => {
    books = books.filter(b => b.id != req.params.id)
    res.send("Book deleted")
})

module.exports = router
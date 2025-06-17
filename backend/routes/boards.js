const express = require('express')
const router = express.Router()
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    const boards = await prisma.boards.findMany()
    res.json(boards)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const board = await prisma.boards.findUnique({
            where: { id: parseInt(id) }
        })
    } catch(error) {
        res.status(404).send('ID is not valid')
    }

    res.json(board)
})

router.post('/', async (req, res) => {
    const { title, image_url, author, category } = req.body
    const newBoard = await prisma.boards.create({
        data: {
            title: title,
            image_url: image_url,
            author: author,
            category: category,
        }
    })

    res.json(newBoard)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedBoard = await prisma.boards.delete({
        where: { id: parseInt(id) }
    })
    res.json(deletedBoard)
})

// Search Query

router.get('/search/:query', async (req, res) => {
    const { query } = req.params
    const filteredBoards = await prisma.boards.findMany({
        where: {
            title: {
                contains: query,
                mode: 'insensitive'
            }
        }
    })
    res.json(filteredBoards)
})

// TODO: Error handling
router.get('/filter/:category', async (req, res) => {
    const { category } = req.params
    const filteredBoards = await prisma.boards.findMany({
        where: { category: category }
    })
    res.json(filteredBoards)
})

module.exports = router
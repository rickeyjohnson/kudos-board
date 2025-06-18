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
			where: { id: parseInt(id) },
		})
		res.json(board)
	} catch (error) {
		res.status(404).send('ID is not valid')
	}
})

router.post('/', async (req, res) => {
	const { title, image_url, author, category } = req.body
	const newBoard = await prisma.boards.create({
		data: {
			title: title,
			image_url: image_url,
			author: author,
			category: category,
		},
	})

	res.json(newBoard)
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	const deletedBoard = await prisma.boards.delete({
		where: { id: parseInt(id) },
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
				mode: 'insensitive',
			},
		},
	})
	res.json(filteredBoards)
})

// TODO: Error/Invalid handling
router.get('/filter/:category', async (req, res) => {
	const { category } = req.params
	const filteredBoards = await prisma.boards.findMany({
		where: { category: category },
	})
	res.json(filteredBoards)
})

// TODO: Error/Invalid handling
router.get('/sort/:sort', async (req, res) => {
	const { sort } = req.params
	let filteredBoards = null

	if (sort === 'Recent') {
		filteredBoards = await prisma.boards.findMany({
			orderBy: {
				id: 'desc',
			},
		})
	} else {
		filteredBoards = await prisma.boards.findMany()
	}

	res.json(filteredBoards)
})

// Cards

router.get('/:id/cards', async (req, res) => {
	const { id } = req.params
	const cards = await prisma.cards.findMany({
		where: { board_id: parseInt(id) },
	})
	res.json(cards)
})

router.post('/:id/cards', async (req, res) => {
	const { id } = req.params
	const { title, image_url, author, upvotes } = req.body
	const newCard = await prisma.cards.create({
		data: {
			board_id: parseInt(id),
			title: title,
			image_url: image_url,
			author: author,
			upvotes: 0,
		},
	})

	res.json(newCard)
})

// router.delete('/:id/cards/:id', async (req, res) => {
//     const { id } = req.params
//     const deletedBoard = await prisma.boards.delete({
//         where: { id: parseInt(id) }
//     })
//     res.json(deletedBoard)
// })

module.exports = router

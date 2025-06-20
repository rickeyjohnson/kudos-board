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
            take: 6,
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
		orderBy: [
			{pinned: 'desc'},
			{id : 'asc'}
		],
	})
	res.json(cards)
})

router.post('/:id/cards', async (req, res) => {
	const { id } = req.params
	const { title, image_url, author, message, pinned } = req.body
	const newCard = await prisma.cards.create({
		data: {
			board_id: parseInt(id),
			title: title,
			image_url: image_url,
			author: author,
			upvotes: 0,
            message: message,
			pinned: pinned,
		},
	})

	res.json(newCard)
})

router.delete('/:board_id/cards/:id', async (req, res) => {
    const { board_id, id } = req.params
    const deleteCard = await prisma.cards.delete({
        where: { id: parseInt(id) }
    })
    res.json(deleteCard)
})

// Card upvotes
router.put('/:board_id/cards/:id', async (req, res) => {
	const { board_id, id } = req.params
	const { upvotes } = req.body
	const updateCard = await prisma.cards.update({
		where: { id: parseInt(id) },
		data: {
			upvotes: parseInt(upvotes) + 1,
		}
	})
	res.json(updateCard)
})

// Card pinned
router.put('/:board_id/cards/:id/pinned', async (req, res) => {
	const { board_id, id } = req.params
	const { pinned } = req.body
	const updateCard = await prisma.cards.update({
		where: { id: parseInt(id) },
		data: {
			pinned: Boolean(pinned),
		}
	})
	res.json(updateCard)
})

// router.get('/:board_id/cards/:id/pinned', async (req, res) => {
// 	const { board_id, id } = req.params
// 	const updateCard = await prisma.cards.findMany({
// 		where: { id: parseInt(id) },
// 		orderBy: {
// 			pinned: 'desc'
// 		}
// 	})
// 	res.json(updateCard)
// })

// Comments
router.get('/:board_id/cards/:card_id/comments', async (req, res) => {
	const { board_id, card_id } = req.params
	const comments = await prisma.comments.findMany({
		where: { card_id: parseInt(card_id) },
	})
	res.json(comments)
})

router.post('/:board_id/cards/:card_id/comments', async (req, res) => {
	const { board_id, card_id } = req.params
	const { author, comments } = req.body
	const newComments = await prisma.comments.create({
		data: {
			card_id: parseInt(card_id),
			author: author,
			comments: comments,
		},
	})

	res.json(newComments)
})

// router.put('/:board_id/cards/:card_id', async (req, res) => {
// 	const { board_id, card_id } = req.params
// 	const { comment } = req.body
// 	const updateComments = await prisma.comments.findMany({
// 		where: { card_id: parseInt(card_id) },
// 		data: {
// 			comment: comment,
// 		}
// 	})
// 	res.json(updateComments)
// })

module.exports = router

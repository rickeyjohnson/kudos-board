type Card = {
	id: null | number
	imageUrl: string
	title: string
	description: string
}

type Board = {
	id: null | number
	imageUrl: string
	title: string
	author: string
	category: string
	cards: Card[]
}

type BoardProps = {
	board: Board
	onSelect: (board: Board) => void
}

type BoardsListProps = {
	boards: Board[]
	onSelect: (board: Board) => void
}

type CardsListProps = {
	cards: Card[]
}

type HomeProps = {
	boards: Board[]
	onSelect: (board: Board) => void
}

type BoardDetailsProps = {
	board?: Board
	onExit: () => void
}

export {
	type Board,
	type BoardsListProps,
	type BoardProps,
	type CardsListProps,
	type HomeProps,
	type BoardDetailsProps
}

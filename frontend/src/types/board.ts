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
	category: string,
	cards: Card[],
}

type BoardProps = {
	board: Board
}

type BoardsListProps = {
	boards: Board[]
}

type CardsListProps = {
	cards: Card[]
}

export { type Board, type BoardsListProps, type BoardProps, type CardsListProps }

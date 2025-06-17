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
	onViewClick: React.MouseEventHandler<HTMLButtonElement>
}

type BoardsListProps = {
	boards: Board[]
	onSelectedBoardClick: React.MouseEventHandler<HTMLButtonElement>
}

type CardsListProps = {
	cards: Card[]
}

type HomeProps = {
	boards: Board[]
	onSelectedBoardClick: React.MouseEventHandler<HTMLButtonElement>
}

type BoardDetailsProps = {
	board?: Board
}

export {
	type Board,
	type BoardsListProps,
	type BoardProps,
	type CardsListProps,
	type HomeProps,
	type BoardDetailsProps
}

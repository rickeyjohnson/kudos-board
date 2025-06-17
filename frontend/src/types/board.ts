type CardType = {
	id: null | number
	image_url: null | string
	title: string
	description: string
}

type BoardType = {
	id: number
	image_url: null | string
	title: string
	author: string
	category: string
}

type BoardProps = {
	board: BoardType
}

type BoardsListProps = {
	boards: BoardType[]
}

type CardsListProps = {
	cards: CardType[]
}

type HomeProps = {
	boards: BoardType[]
	onSubmitNewBoard: (newBoard: BoardType) => void
}

type BoardDetailsProps = {
	board?: BoardType
	onExit: () => void
}

type CreateBoardModalProps = {
	onSubmit: () => void
}

export {
	type BoardType,
	type BoardsListProps,
	type BoardProps,
	type CardsListProps,
	type HomeProps,
	type BoardDetailsProps,
	type CardType,
	type CreateBoardModalProps
}

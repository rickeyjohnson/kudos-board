type CardType = {
	id: null | number
	image_url: null | string
	title: string
	author: string
	upvotes: number
	message: string
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
	deleteBoard: () => void
}

type BoardsListProps = {
	boards: BoardType[]
	deleteBoard: () => void
}

type CardsListProps = {
	cards: CardType[]
	board_id: string
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

type CreateCardModalProps = {
	board_id: string | number
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
	type CreateBoardModalProps,
	type CreateCardModalProps
}

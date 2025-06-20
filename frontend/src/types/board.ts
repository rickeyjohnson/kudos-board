type CardType = {
	id: null | number
	image_url: null | string
	title: string
	author: string
	upvotes: number
	message: string
	pinned: boolean
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
	deleteBoard: (board_id: number) => void
}

type BoardsListProps = {
	boards: BoardType[]
	deleteBoard: (board_id: number) => void
}

type CardsListProps = {
	cards: CardType[]
	board_id: string
	deleteCard: any
	upvoteCard: any
	pinCard: any
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
	onSubmit: any
	closeModal: any
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

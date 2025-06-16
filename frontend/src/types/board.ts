type Board = {
	id: number
	imageUrl: string
	title: string
	category: string
}

type BoardProps = {
	board: Board
}

type BoardsListProps = {
	boards: Board[]
}

export { type Board, type BoardsListProps, type BoardProps }

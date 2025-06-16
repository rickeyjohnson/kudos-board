type Boards = {
	id: number
	imageUrl: string | null
	title: string
	category: string
}

type BoardsListProps = {
	boards: Boards[]
}

export { type Boards, type BoardsListProps }

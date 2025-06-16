import type { FC } from 'react'
import type { BoardsListProps } from '../types/board'
import Board from './Board'

const BoardsList: FC<BoardsListProps> = ({ boards }) => {
	return (
		<div className="boards-list">
			{boards.length > 0 ? boards.map((board) => {
				return <Board board={board} />
			}) : <p>no boards displayed</p>}
		</div>
	)
}

export default BoardsList
import type { FC } from 'react'
import type { BoardsListProps } from '../types/board'
import Board from './Board'

const BoardsList: FC<BoardsListProps> = ({ boards }) => {
	return (
		<div className="boards-list">
			{boards.map((board) => {
				return <Board board={board} />
			})}
		</div>
	)
}

export default BoardsList

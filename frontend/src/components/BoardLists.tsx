import type { FC } from 'react'
import type { BoardsListProps } from '../types/board'
import Board from './Board'

const BoardsList: FC<BoardsListProps> = ({ boards, onSelect }) => {
	return (
		<div className="boards-list">
			{boards.map((board) => {
				return <Board board={board} onSelect={onSelect}/>
			})}
		</div>
	)
}

export default BoardsList

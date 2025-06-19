import type { FC } from 'react'
import type { BoardsListProps } from '../types/board'
import Board from './Board'

const BoardsList: FC<BoardsListProps> = ({ boards, deleteBoard }) => {
	return (
		<div className="boards-list cards-list">
			{boards.map((board) => {
				return (
					<Board
						key={board.id}
						board={board}
						deleteBoard={deleteBoard}
					/>
				)
			})}
		</div>
	)
}

export default BoardsList

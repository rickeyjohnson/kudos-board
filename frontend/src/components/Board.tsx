import type { FC } from 'react'
import type { BoardProps } from '../types/board'

const Board: FC<BoardProps> = ({ board, onViewClick }) => {
	return (
		<div className="board">
			<img src={board.imageUrl} alt="board image" />
			<h3>{board.title}</h3>
			<h4>{board.author}</h4>
			<p>{board.category}</p>

			<button className="view-board-btn" onClick={onViewClick}>View Board</button>
			<button className="delete-board-btn">Delete Board</button>
		</div>
	)
}

export default Board

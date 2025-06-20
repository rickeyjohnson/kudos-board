import type { FC } from 'react'
import type { BoardProps } from '../types/board'
import { Link } from 'react-router'

const Board: FC<BoardProps> = ({ board, deleteBoard }) => {
	return (
		<div className="board card">
			<img
				src={`https://picsum.photos/seed/${board.title}/200/300`}
				alt={board.title}
			/>
			<h3>{board.title}</h3>

			<h4>{board.author}</h4>
			<p>{board.category}</p>

			<div className="board-btns">
				<Link to={`/details/${board.id}`}>
					<button className="view-board-btn">View</button>
				</Link>

				<button
					className="delete-btn"
					onClick={() => deleteBoard(board.id)}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Board

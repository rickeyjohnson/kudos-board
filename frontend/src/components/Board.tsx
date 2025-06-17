import type { FC } from 'react'
import type { BoardProps } from '../types/board'

const Board: FC<BoardProps> = ({ board, deleteBoard }) => {
	const IMG_PLACEHOLDER =
		'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg'

	const handleDeleteBoard = () => {
		fetch(`http://localhost:3000/boards/${board.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		deleteBoard()
	}

	return (
		<div className="board">
			<img src={IMG_PLACEHOLDER} alt={board.title} />
			<h3>{board.title}</h3>
			<h4>{board.author}</h4>
			<p>{board.category}</p>

			<button className="view-board-btn">View Board</button>
			<button
				className="delete-board-btn"
				onClick={() => handleDeleteBoard()}
			>
				Delete Board
			</button>
		</div>
	)
}

export default Board

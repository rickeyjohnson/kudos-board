import { useParams } from 'react-router'
import type { CardType } from '../types/board'

type CardProps = {
	card: CardType
	board_id: string
}

const Card = ({ card, board_id }: CardProps) => {
	const IMG_PLACEHOLDER =
		'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg'
	const api_url = import.meta.env.VITE_API_URL

	const handleDeleteBoard = () => {
		fetch(`${api_url}/boards/${board_id}/cards/${card.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		console.log('successs')
	}

	return (
		<div className="card">
			<img src={IMG_PLACEHOLDER} alt="board image" />
			<h2>{card.title}</h2>
			<p>{card.message}</p>
			<p>upvotes: {card.upvotes}</p>

			<p>{card.id}</p>

			<button onClick={handleDeleteBoard}>Delete</button>
		</div>
	)
}

export default Card

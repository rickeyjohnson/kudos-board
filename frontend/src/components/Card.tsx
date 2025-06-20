import { useState } from 'react'
import type { CardType } from '../types/board'

type CardProps = {
	card: CardType
	board_id: string
	deleteCard: any
	upvoteCard: any
}

const Card = ({ card, board_id, deleteCard, upvoteCard }: CardProps) => {
	const IMG_PLACEHOLDER =
		'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg'
	const api_url = import.meta.env.VITE_API_URL
	const [upvotes, setUpvotes] = useState(card.upvotes)

	// const handleDeleteBoard = () => {
	// 	fetch(`${api_url}/boards/${board_id}/cards/${card.id}`, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	})
	// 	console.log('successs')
	// }

	// const handleUpvote = () => {
	// 	fetch(`${api_url}/boards/${board_id}/cards/${card.id}`, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body : JSON.stringify({
	// 			upvotes: upvotes,
	// 		})
	// 	})

	// 	setUpvotes(upvotes + 1)
	// }

	return (
		<div className="card card-card">
			<h2>{card.title}</h2>
			<p>{card.message}</p>

			<img src={card.image_url ?? IMG_PLACEHOLDER} alt="board image" />
			
			<p>upvotes: {card.upvotes}</p>

			<div className='card-btns'>
				<button onClick={() => { 
					upvoteCard(card.id, card.upvotes)
					setUpvotes(upvotes + 1)
				}}>Upvote</button>
				<button onClick={() => deleteCard(card.id)} className='delete-btn'>Delete</button>
			</div>
		</div>
	)
}

export default Card

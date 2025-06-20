import { useState } from 'react'
import type { CardType } from '../types/board'
import { CardModal } from './CardModal'
import { CommentModal } from './CommentModal'

type CardProps = {
	card: CardType
	board_id: string
	deleteCard: any
	upvoteCard: any
}

const Card = ({ card, board_id, deleteCard, upvoteCard }: CardProps) => {
	const IMG_PLACEHOLDER =
		'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg'
	const [upvotes, setUpvotes] = useState(card.upvotes)
	const [openCardModal, setOpenCardModal] = useState(false)
	const [openCommentModal, setOpenCommentModal] = useState(false)

	return (
		<div className="card card-card">
			<h2>{card.title}</h2>
			<p>{card.message}</p>

			<img src={card.image_url ?? IMG_PLACEHOLDER} alt="board image" />
			
			<p>upvotes: {card.upvotes}</p>

			<div className='card-btns'>
				<button onClick={() => setOpenCardModal(true)}>View</button>
				<button onClick={() => setOpenCommentModal(true)}>Comment</button>
				<button>Pin</button>
				<button onClick={() => { 
					upvoteCard(card.id, card.upvotes)
					setUpvotes(upvotes + 1)
				}}>Upvote</button>
				<button onClick={() => deleteCard(card.id)} className='delete-btn'>Delete</button>
			</div>

			{ openCardModal ? <CardModal card={card} closeModal={() => setOpenCardModal(false)}/> : <></>}
			{ openCommentModal ? <CommentModal closeModal={() => setOpenCommentModal(false)} card_id={card.id ?? 0} /> : <></>} 
		</div>
	)
}

export default Card
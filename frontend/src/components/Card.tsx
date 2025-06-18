import type { CardType } from '../types/board'

type CardProps = {
	card: CardType
}

const Card = ({ card }: CardProps) => {
	return (
		<div className="card">
			<img
				src={
					card.image_url
						? card.image_url
						: 'https://picsum.photos/200/300'
				}
				alt="board image"
			/>
			<h2>{card.title}</h2>
			<p>{card.author}</p>
			<p>upvotes: {card.upvotes}</p>
		</div>
	)
}

export default Card

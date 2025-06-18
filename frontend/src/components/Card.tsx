import type { CardType } from '../types/board'

type CardProps = {
	card: CardType
}

const Card = ({ card }: CardProps) => {
	const IMG_PLACEHOLDER =
		'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg'

	return (
		<div className="card">
			<img src={IMG_PLACEHOLDER} alt="board image" />
			<h2>{card.title}</h2>
			<p>{card.message}</p>
			<p>upvotes: {card.upvotes}</p>
		</div>
	)
}

export default Card

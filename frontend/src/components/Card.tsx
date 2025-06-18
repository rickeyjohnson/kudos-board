import type { CardType} from "../types/board"

type CardProps = {
    card: CardType
}

const CardElement = ({ card }: CardProps) => {
    return (
        <div className="card">
            <img src={card.imageUrl ? card.imageUrl : 'https://picsum.photos/200/300'} alt="board image" />
			<h2>{card.title}</h2>
			<p>{card.description}</p>
        </div>
    )
}

export default CardElement
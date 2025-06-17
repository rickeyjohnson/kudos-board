import type { Card } from "../types/board"

type CardProps = {
    card: Card
}

const CardElement = ({ card }: CardProps) => {
    return (
        <div className="card">
            <img src={card.imageUrl} alt="board image" />
			<h2>{card.title}</h2>
			<p>{card.description}</p>
        </div>
    )
}

export default CardElement
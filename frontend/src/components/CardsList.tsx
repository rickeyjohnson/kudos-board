import type { CardsListProps } from '../types/board'
import Card from './Card'

const CardsList: React.FC<CardsListProps> = ({ cards }) => {
	return (
		<div className="cards-list">
			{cards.map((card) => {
				return <Card key={card.id} card={card} />
			})}
		</div>
	)
}

export default CardsList

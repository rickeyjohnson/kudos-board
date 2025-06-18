import type { CardsListProps } from '../types/board'
import Card from './Card'

const CardsList: React.FC<CardsListProps> = ({ cards, board_id }) => {
	return (
		<div className="cards-list">
			{cards.map((card) => {
				return <Card key={card.id} card={card} board_id={board_id}/>
			})}
		</div>
	)
}

export default CardsList

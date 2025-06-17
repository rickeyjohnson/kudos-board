import type { BoardDetailsProps } from '../types/board'
import CardsList from './CardsList'

const BoardDetails: React.FC<BoardDetailsProps> = ({ board }) => {
	return (
		<div className="board-details">
			board details here
			<CardsList cards={board?.cards ?? []} />
		</div>
	)
}

export default BoardDetails

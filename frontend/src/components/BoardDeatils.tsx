import type { BoardDetailsProps } from '../types/board'
import CardsList from './CardsList'

const BoardDetails: React.FC<BoardDetailsProps> = ({ board, onExit }) => {
	return (
		<div className="board-details">
			board details here
			<CardsList cards={board?.cards ?? []} />
			<button onClick={onExit}>Back</button>
		</div>
	)
}

export default BoardDetails

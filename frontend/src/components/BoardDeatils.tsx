import { useState } from 'react'
import type { BoardDetailsProps } from '../types/board'
import CardsList from './CardsList'
import CreateCardModal from './CreateCardModal'

const BoardDetails: React.FC<BoardDetailsProps> = ({ board, onExit }) => {
	const [openCreateCardModal, setOpenCreateCardModal] = useState(false)

	const handleCardCreation = () => {
		
	}

	return (
		<div className="board-details">
			<button onClick={() => setOpenCreateCardModal(true)}>Create new card</button>
			<CardsList cards={board?.cards ?? []} />
			<button onClick={onExit}>Back</button>

			{openCreateCardModal ? <CreateCardModal /> : <></>}
		</div>
	)
}

export default BoardDetails

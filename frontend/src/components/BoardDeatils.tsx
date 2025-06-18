import { useState } from 'react'
import type { BoardDetailsProps } from '../types/board'
import CardsList from './CardsList'
import CreateCardModal from './CreateCardModal'
import { Link, useParams } from 'react-router'

const BoardDetails: React.FC<BoardDetailsProps> = ({ board }) => {
	const { id } = useParams()
	const [openCreateCardModal, setOpenCreateCardModal] = useState(false)

	// const fetchCards = (id: number) => {
	// 	fetch()
	// }

	return (
		<div className="board-details">
			<button onClick={() => setOpenCreateCardModal(true)}>Create new card</button>

			<CardsList cards={[]} />

			<Link to="/">
				<button>Back</button>
			</Link>

			{/* {openCreateCardModal ? <CreateCardModal /> : <></>} */}
		</div>
	)
}

export default BoardDetails

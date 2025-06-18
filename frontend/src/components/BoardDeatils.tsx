import { useEffect, useState } from 'react'
import { type CardType, type BoardType } from '../types/board'
import CardsList from './CardsList'
import CreateCardModal from './CreateCardModal'
import { Link, useParams } from 'react-router'

const BoardDetails: React.FC = () => {
	const { id } = useParams()
	const [board, setBoard] = useState<BoardType>()
	const [cards, setCards] = useState<CardType[]>([])
	const [openCreateCardModal, setOpenCreateCardModal] = useState(false)

	const fetchBoard = () => {
		fetch(`http://localhost:3000/boards/${id}`)
			.then((res) => res.json())
			.then((data) => setBoard(data))
	}

	const fetchCards = () => {
		fetch(`http://localhost:3000/boards/${id}/cards`)
			.then((res) => res.json())
			.then((data) => setCards(data))
	}

	const handleSubmit = () => {
		fetchBoard()
		fetchCards()
		setOpenCreateCardModal(false)
	}

	useEffect(() => {
		fetchBoard()
		fetchCards()
	}, [])

	return (
		<main className="board-details">
			<Link to="/">
				<button>Back</button>
			</Link>

			<h1>{board?.title}</h1>

			<button onClick={() => setOpenCreateCardModal(true)}>
				Create new card
			</button>

			<CardsList cards={cards} />

			{openCreateCardModal ? (
				<CreateCardModal onSubmit={handleSubmit} board_id={id ?? ''} />
			) : (
				<></>
			)}
		</main>
	)
}

export default BoardDetails

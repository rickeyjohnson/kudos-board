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
	const api_url = import.meta.env.VITE_API_URL

	const fetchBoard = () => {
		fetch(`${api_url}/boards/${id}`)
			.then((res) => res.json())
			.then((data) => setBoard(data))
	}

	const fetchCards = () => {
		fetch(`${api_url}/boards/${id}/cards`)
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
	}, [cards])

	return (
		<main className="board-details">
			<Link to="/">
				<button>Back</button>
			</Link>

			<h1>{board?.title}</h1>

			<button onClick={() => setOpenCreateCardModal(true)}>
				Create new card
			</button>

			<CardsList cards={cards} board_id={id ?? ''}/>

			{openCreateCardModal ? (
				<CreateCardModal onSubmit={handleSubmit} board_id={id ?? ''} />
			) : (
				<></>
			)}
		</main>
	)
}

export default BoardDetails

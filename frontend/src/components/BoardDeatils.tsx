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

	const fetchBoard = async () => {
		await fetch(`${api_url}/boards/${id}`)
			.then((res) => res.json())
			.then((data) => setBoard(data))
	}

	const fetchCards = async () => {
		await fetch(`${api_url}/boards/${id}/cards`)
			.then((res) => res.json())
			.then((data) => setCards(data))
	}

	const handleSubmit = () => {
		fetchBoard()
		fetchCards()
		setOpenCreateCardModal(false)
	}

	const handleDelete = (card_id: any) => {
		fetch(`${api_url}/boards/${id}/cards/${card_id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	const handleUpvote = (card_id: any, upvotes: any) => {
		fetch(`${api_url}/boards/${id}/cards/${card_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body : JSON.stringify({
				upvotes: upvotes,
			})
		})
	}

	useEffect(() => {
		fetchBoard()
		fetchCards()
	}, [cards])

	return (
		<main className="board-details">
			<Link to="/">
				<button className='back-btn'>Back</button>
			</Link>

			<h1>{board?.title}</h1>

			<button onClick={() => setOpenCreateCardModal(true)} className='create-new-card'>
				Create new card
			</button>

			<CardsList cards={cards} board_id={id ?? ''} deleteCard={handleDelete} upvoteCard={handleUpvote}/>

			{openCreateCardModal ? (
				<CreateCardModal onSubmit={handleSubmit} board_id={id ?? ''} />
			) : (
				<></>
			)}
		</main>
	)
}

export default BoardDetails

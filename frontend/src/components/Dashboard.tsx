import { useState, useEffect } from 'react'
import type { Board } from '../types/board'
import Home from './Home'
import BoardDetails from './BoardDeatils'

const Dashboard: React.FC = () => {
	const [boards, setBoards] = useState<Board[]>([])
	const [showBoardDetails, setShowBoardDetails] = useState<boolean>(true)
	const [selectedBoard, setSelectedBoard] = useState<Board | undefined>(undefined)

	const selectBoard = (board: Board) => {
		console.log(JSON.stringify(board))
		setShowBoardDetails(true)
		setSelectedBoard(board)
	}

	useEffect(() => {
		setBoards([
			{
				id: 1,
				imageUrl: 'https://picsum.photos/200/300',
				title: 'Congrats Interns',
				author: 'Rickey',
				category: 'Celebration',
				cards: [
					{
						id: 23,
						title: 'lebron',
						imageUrl: 'https://picsum.photos/100/200',
						description:
							'lebron james lebron james lebron james lebron james',
					},
				],
			},
		])
	}, [])

	return (
		<>
			{selectBoard ? (
				<Home
					boards={boards}
					onSelectedBoardClick={() => selectBoard}
				/>
			) : (
				<BoardDetails board={selectedBoard} />
			)}
		</>
	)
}

export default Dashboard

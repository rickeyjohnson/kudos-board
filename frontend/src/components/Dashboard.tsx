import { useState, useEffect } from 'react'
import type { Board } from '../types/board'
import Home from './Home'
import BoardDetails from './BoardDeatils'

const Dashboard: React.FC = () => {
	const [boards, setBoards] = useState<Board[]>([])
	const [showBoardDetails, setShowBoardDetails] = useState<boolean>(false)
	const [selectedBoard, setSelectedBoard] = useState<Board | undefined>(undefined)

	const handleSelect = (board: Board) => {
		setShowBoardDetails(true)
		setSelectedBoard(board)
        console.log('entered', JSON.stringify(board))
	}

    const handleSubmitNewBoard = (newBoard: Board) => {
        setBoards([...boards, {...newBoard, id: boards.length + 1}])
        console.log('new board created')
    }

    const handleExit = () => {
        setShowBoardDetails(false)
        console.log('exited')
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
			{!showBoardDetails ? (
				<Home
					boards={boards}
					onSelect={handleSelect}
                    onSubmitNewBoard={handleSubmitNewBoard}
				/>
			) : (
				<BoardDetails board={selectedBoard} onExit={handleExit}/>
			)}
		</>
	)
}

export default Dashboard

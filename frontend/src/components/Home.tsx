import { useEffect, useState } from 'react'
import BoardsList from './BoardLists'
import CreateBoardModal from './CreateBoardModal'
import type { BoardType } from '../types/board'

const Home: React.FC = () => {
	const [boards, setBoards] = useState<BoardType[]>([])
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [filterOption, setFilterOption] = useState<string>('')
	const [openCreateBoardModal, setOpenCreateBoardModal] =
		useState<boolean>(false)

	const fetchBoards = () => {
		fetch('http://localhost:3000/boards')
			.then((res) => res.json())
			.then((data) => setBoards(data))
	}

	const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		fetch(`http://localhost:3000/boards/search/${searchQuery}`)
			.then((res) => res.json())
			.then((data) => setBoards(data))
	}

	const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setSearchQuery('')
		fetchBoards()
	}

	const handleSumbit = () => {
		fetchBoards()
	}

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const filter = e.target.value

		if (filter === 'All' || filter === 'Recent') {
			fetch(`http://localhost:3000/boards/sort/${filter}`)
				.then((res) => res.json())
				.then((data) => setBoards(data))
		} else {
			fetch(`http://localhost:3000/boards/filter/${filter}`)
				.then((res) => res.json())
				.then((data) => setBoards(data))
		}

		setFilterOption(filter)
	}

	const handleDeleteBoard = () => {
		console.log('board deleted')
		fetchBoards()
	}

	useEffect(() => {
		fetchBoards()
	}, [])

	return (
		<div className="Home">
			<header>
				<form className="search-form">
					<input
						className="search-bar"
						type="text"
						placeholder="Search boards"
						name="search-bar"
						value={searchQuery}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSearchQuery(e.target.value)
						}
					/>

					<button
						className="search-btn"
						type="submit"
						onClick={handleSearch}
					>
						Search
					</button>

					<button
						className="clear-btn"
						type="reset"
						onClick={handleClear}
					>
						Clear
					</button>

					<select
						className="filter-dropdown"
						value={filterOption}
						onChange={(e) => handleSelect(e)}
					>
						<option value="All">All</option>
						<option value="Recent">Recent</option>
						<option value="Celebration">Celebration</option>
						<option value="Thank You">Thank You</option>
						<option value="Inspiration">Inspiration</option>
					</select>
				</form>

				<button
					className="create-board-btn"
					onClick={() => setOpenCreateBoardModal(true)}
				>
					Create a New Board
				</button>
			</header>

			<BoardsList boards={boards} deleteBoard={handleDeleteBoard} />

			{openCreateBoardModal ? (
				<CreateBoardModal onSubmit={handleSumbit} />
			) : (
				<></>
			)}
		</div>
	)
}

export default Home

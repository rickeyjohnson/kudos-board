import { useEffect, useRef, useState } from 'react'
import BoardsList from './BoardLists'
import CreateBoardModal from './CreateBoardModal'
import type { BoardType } from '../types/board'

const Home: React.FC = () => {
	const [boards, setBoards] = useState<BoardType[]>([])
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [filterOption, setFilterOption] = useState<string>('')
	const [openCreateBoardModal, setOpenCreateBoardModal] =
		useState<boolean>(false)
	const hasRunFirst = useRef(false);
	const api_url = import.meta.env.VITE_API_URL

	const fetchBoards = async () => {
		await fetch(`${api_url}/boards`)
			.then((res) => res.json())
			.then((data) => setBoards(data))
	}

	const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (!searchQuery) { 
			fetchBoards() 
		} else {
			fetch(`${api_url}/boards/search/${searchQuery}`)
				.then((res) => res.json())
				.then((data) => setBoards(data))
		}
	}

	const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setSearchQuery('')
		fetchBoards()
	}

	const handleSumbit = async () => {

		setOpenCreateBoardModal(false)
	}

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const filter = e.target.value

		if (filter === 'All' || filter === 'Recent') {
			fetch(`${api_url}/boards/sort/${filter}`)
				.then((res) => res.json())
				.then((data) => setBoards(data))
		} else {
			fetch(`${api_url}/boards/filter/${filter}`)
				.then((res) => res.json())
				.then((data) => setBoards(data))
		}

		setFilterOption(filter)
	}

	// const handleDeleteBoard = () => {
	// 	console.log('board deleted')
	// 	fetchBoards()
	// }

	const handleDelete = async (board_id: number) => {
		await fetch(`${api_url}/boards/${board_id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		await fetchBoards()
	}

	const handleCreate = async (e: Event, title: string, author: string, category: string) => {
		if (!title) { return }

		await fetch(`${api_url}/boards`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				author: author,
				category: category,
				image_url:
					'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg',
			}),
		})

		e.preventDefault()
		setOpenCreateBoardModal(false)
		fetchBoards()
	}

	useEffect(() => {
		fetchBoards()
	}, [])

	return (
		<main className="Home">
			<section className='banner'>
				<form className="search-form">
					<div className='search'>
						<input
							className="search-bar"
							type="text"
							placeholder="Boards"
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
					</div>

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
					Create Board
				</button>
			</section>

			<BoardsList boards={boards} deleteBoard={handleDelete} />

			{openCreateBoardModal ? (
				<CreateBoardModal onSubmit={handleCreate} closeModal={() => setOpenCreateBoardModal(false)} />
			) : (
				<></>
			)}
		</main>
	)
}

export default Home

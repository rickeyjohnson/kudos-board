import {
	useState,
	type FC,
	type MouseEvent,
	type ChangeEvent,
	useEffect,
} from 'react'
import BoardsList from './BoardLists'
import type { Board } from '../types/board'
import CreateBoardModal from './CreateBoardModal'

const Dashboard: FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [filterOption, setFilterOption] = useState<string>('')
	const [boards, setBoards] = useState<Board[]>([])
    const [openCreateBoardModal, setOpenCreateBoardModal] = useState<boolean>(false)

	const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		console.log(searchQuery)
	}

	const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setSearchQuery('')
	}

	useEffect(() => {
		setBoards([
			{
				id: 1,
				imageUrl: 'https://picsum.photos/200/300',
				title: 'Congrats Interns',
				author: 'Rickey',
				category: 'Celebration',
			},
		])
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
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setFilterOption(e.target.value)
						}
					>
						<option value="All">All</option>
						<option value="Recent">Recent</option>
						<option value="Celebration">Celebration</option>
						<option value="Thank You">Thank You</option>
						<option value="Inspiration">Inspiration</option>
					</select>
				</form>

				<button className="create-board-btn" onClick={() => setOpenCreateBoardModal(true)}>Create a New Board</button>
			</header>

            <main>
                <BoardsList boards={boards} />
                {openCreateBoardModal ? <CreateBoardModal /> : <></>}
            </main>
		</div>
	)
}

export default Dashboard

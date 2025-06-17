import { useState } from "react"
import BoardsList from "./BoardLists"
import CreateBoardModal from "./CreateBoardModal"
import type { HomeProps } from "../types/board"

const Home: React.FC<HomeProps> = ({ boards, onSelectedBoardClick }) => {
    const [searchQuery, setSearchQuery] = useState<string>('')
	const [filterOption, setFilterOption] = useState<string>('')
    const [openCreateBoardModal, setOpenCreateBoardModal] = useState<boolean>(false)

	const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		console.log(searchQuery)
	}

	const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setSearchQuery('')
	}

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
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
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
                <BoardsList boards={boards} onSelectedBoardClick={onSelectedBoardClick}/>
                {openCreateBoardModal ? <CreateBoardModal /> : <></>}
            </main>
		</div>
    )
}

export default Home
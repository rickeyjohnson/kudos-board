import { useState, type FC } from 'react'

const Dashboard: FC = () => {
	const [searchQuery, setSearchQuery] = useState('')

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
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
					/>

					<button className="search-btn" type="submit" onClick={handleSearch}>
						Search
					</button>

                    <button className='clear-btn' type='reset' onClick={handleClear}>Clear</button>
				</form>
			</header>
		</div>
	)
}

export default Dashboard

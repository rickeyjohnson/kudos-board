import { useState, type ChangeEvent, type FC } from 'react'

const CreateBoardModal: FC = () => {
	const [title, setTitle] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [categoryOption, setCategoryOption] = useState<string>('Celebration')

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log({
            title,
            author,
            description,
            categoryOption
        })
    }

	return (
		<div className="create-board-modal-overlay modal-overlay">
			<form className="create-board-modal-content">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
					required={true}
				/>

				<label htmlFor="author">Author</label>
				<input
					type="text"
					name="author"
					value={author}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setAuthor(e.target.value)
					}
					required={false}
				/>

				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					value={description}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setDescription(e.target.value)
					}
					required={true}
				/>

				<label htmlFor="category">Category</label>
				<select
					className="filter-dropdown"
					name="category"
					value={categoryOption}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						setCategoryOption(e.target.value)
					}
				>
					<option value="Celebration">Celebration</option>
					<option value="Thank You">Thank You</option>
					<option value="Inspiration">Inspiration</option>
				</select>

                <button type="submit" onClick={handleSubmit}>Create</button>
			</form>
		</div>
	)
}

export default CreateBoardModal

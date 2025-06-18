import { useState, type ChangeEvent, type FC } from 'react'
import type { CreateBoardModalProps } from '../types/board'

const CreateBoardModal: FC<CreateBoardModalProps> = ({ onSubmit }) => {
	const [title, setTitle] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const [category, setCategory] = useState<string>('Celebration')

	const createNewBoard = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!title) { return false }

		fetch('http://localhost:3000/boards', {
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
		return true
	}

	return (
		<div className="create-board-modal-overlay modal-overlay">
			<form className="create-board-modal-content">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					required={true}
					name="title"
					value={title}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
				/>

				<label htmlFor="author">Author</label>
				<input
					type="text"
					name="author"
					value={author}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setAuthor(e.target.value)
					}
				/>

				<label htmlFor="category">Category</label>
				<select
					className="filter-dropdown"
					name="category"
					value={category}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						setCategory(e.target.value)
					}
				>
					<option value="Celebration">Celebration</option>
					<option value="Thank You">Thank You</option>
					<option value="Inspiration">Inspiration</option>
				</select>

				<button
					type="submit"
					onClick={(e) => {
						if (createNewBoard(e)) { onSubmit() }
					}}
				>
					Create
				</button>
			</form>
		</div>
	)
}

export default CreateBoardModal

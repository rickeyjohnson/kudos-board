import { useState, type ChangeEvent, type FC } from 'react'
import type { CreateBoardModalProps } from '../types/board'

const CreateBoardModal: FC<CreateBoardModalProps> = ({ onSubmit, closeModal }) => {
	const [title, setTitle] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const [category, setCategory] = useState<string>('Celebration')
	const api_url = import.meta.env.VITE_API_URL

	// const createNewBoard = (e: Event) => {
	// 	if (!title) { return false }

	// 	fetch(`${api_url}/boards`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			title: title,
	// 			author: author,
	// 			category: category,
	// 			image_url:
	// 				'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg',
	// 		}),
	// 	})

	// 	e.preventDefault()
	// 	return true
	// }

	// const handleExit = (e: React.MouseEvent<HTMLDivElement>) => {
	// 	const targetElement = e.target as HTMLDivElement
	// 	if (targetElement.classList.contains('exit')) {
	// 		onSubmit()
	// 	}
	// }

	const handleSubmit = (e: any) => {
		e.preventDefault()
		onSubmit(e, title, author, category)
	}

	return (
		<div onClick={closeModal} className="create-board-modal-overlay modal-overlay exit">
			<div className='className="create-board-modal-content modal-content' onClick={(e) => e.stopPropagation()}>
				<div className='exit-btn exit' onClick={closeModal}><svg className='exit' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path className='exit' d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
				<form className='modal-form'>
					<h1>Create Board</h1>
					<p>Enter information about your board to create a new board. Click create when you're done.</p>

					<label htmlFor="title">Title <span>*</span></label>
					<input
						type="text"
						required={true}
						name="title"
						value={title}
						placeholder='New Kudos Board'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setTitle(e.target.value)
						}
					/>

					<label htmlFor="author">Author</label>
					<input
						type="text"
						name="author"
						value={author}
						placeholder='Me'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setAuthor(e.target.value)
						}
					/>

					<label htmlFor="category">Category <span>*</span></label>
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
						onClick={(e) => handleSubmit(e)}
					>
						Create
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateBoardModal

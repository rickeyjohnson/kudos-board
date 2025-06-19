import { useState, type FC } from 'react'
import type { CreateCardModalProps } from '../types/board'

const CreateCardModal: FC<CreateCardModalProps> = ({ board_id, onSubmit }) => {
	const [title, setTitle] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const api_url = import.meta.env.VITE_API_URL

	const postCard = (e: any) => {

		if (!title || !message) { return false }

		fetch(`${api_url}/boards/${board_id}/cards`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				image_url:
					'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg',
				author: author,
				message: message,
			}),
		})

		e.preventDefault()

		return true
	}

	return (
		<div className="create-card-modal-overlay modal-overlay" onClick={onSubmit}>
			<div className='create-card-modal-content modal-content'>
				<div className='exit-btn exit' onClick={onSubmit}><svg className='exit' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path className='exit' d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
				<form className="modal-form" onClick={(e) => e.stopPropagation()}>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						placeholder='Get Better Soon!'
						value={title ?? ''}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTitle(e.target.value)
						}
						required={true}
					/>

					<label htmlFor="author">Author</label>
					<input
						type="text"
						name="author"
						placeholder='Jane Doe'
						value={author ?? ''}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setAuthor(e.target.value)
						}
						required={true}
					/>

					<label htmlFor="message">Message</label>
					<input
						type="text-area"
						name="message"
						value={message}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setMessage(e.target.value)
						}
						required={true}
						className='message-text-box'
					/>

					<button type='submit' onClick={(e: any) => {
						if (postCard(e)) { onSubmit() }
					}}>
						Create
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateCardModal

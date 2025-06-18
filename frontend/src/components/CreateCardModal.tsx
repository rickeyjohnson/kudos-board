import { useState, type FC } from 'react'
import type { CreateCardModalProps } from '../types/board'

const CreateCardModal: FC<CreateCardModalProps> = ({ board_id, onSubmit }) => {
	const [title, setTitle] = useState<string>()
	const [author, setAuthor] = useState<string>()

	const postCard = (e: any) => {
		e.preventDefault()

		fetch(`http://localhost:3000/boards/${board_id}/cards`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				image_url:
					'https://s3.eu-central-2.wasabisys.com/bub/wp-media-folder-british-university-of-bahrain-uk-bachelor-degree-courses/wp-content/uploads/2018/02/image-placeholder.jpg',
				author: author,
				upvotes: 0,
			}),
		})
	}

	return (
		<div className="create-card-modal-overlay modal-overlay">
			<form className="create-card-modal-content modal-content">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
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
					value={author ?? ''}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setAuthor(e.target.value)
					}
					required={true}
				/>

				<button
					type="submit"
					onClick={(e) => {
						postCard(e)
						onSubmit()
					}}
				>
					Create
				</button>
			</form>
		</div>
	)
}

export default CreateCardModal

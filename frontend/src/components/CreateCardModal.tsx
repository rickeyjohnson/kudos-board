import { useState, type FC } from 'react'
import type { CreateBoardModalProps } from '../types/board'

const CreateCardModal: FC<CreateBoardModalProps> = ({ onSubmit }) => {
	const [title, setTitle] = useState<string | null>(null)
	const [author, setAuthor] = useState<string | null>()
	const [description, setDescription] = useState<string | null>()
	const [categoryOption, setCategoryOption] = useState<string>('Celebration')

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

				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					value={description ?? ''}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDescription(e.target.value)
					}
					required={true}
				/>

				<button type="submit" onClick={onSubmit}>
					Create
				</button>
			</form>
		</div>
	)
}

export default CreateCardModal

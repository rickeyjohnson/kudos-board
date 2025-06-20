import { useState } from "react"
import { useParams } from "react-router"

export const CommentModal = ({ closeModal, card_id } : {
    closeModal: () => void
    card_id: number
}) => {
    const { board_id } = useParams()
    const [comment, setComment] = useState('')
    const [author, setAuthor] = useState('')
    const api_url = import.meta.env.VITE_API_URL

    const postComment = () => {
        if (!comment) { return }
        fetch(`${api_url}/boards/${board_id}/cards/${card_id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                author: author,
                comments: comment, 
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content comment-content" onClick={(e) => e.stopPropagation()}>
                <form>
                    <h2>Post Comment</h2>
                    <p>Comment on the card you selected.</p>

                    <label>Author</label>
                    <input className="comment-author-input" required={false} type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>

                    <label>Comment <span>*</span></label>
                    <input className="comment-box" required={true} type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
                    
                    <button className="post-btn" onClick={(e) => {
                        postComment()
                        closeModal()
                        e.preventDefault()
                    }}>Post</button>
                </form>
            </div>
        </div>
    )
}
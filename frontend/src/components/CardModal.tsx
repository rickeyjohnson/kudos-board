import { useParams } from "react-router"
import type { CardType } from "../types/board"
import { useEffect, useState } from "react"

export const CardModal = ({ card, closeModal } : {
    card: CardType
    closeModal: () => void
}) => {
    const { board_id } = useParams()
    const api_url = import.meta.env.VITE_API_URL

    const [comments, setComments] = useState([])

    const fetchComments = () => {
        fetch(`${api_url}/boards/${board_id}/cards/${card.id}/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content card-modal-content" onClick={(e) => e.stopPropagation()}>
                <div>    
                    <h1>{card.title}</h1>
                    <h5>{card.author}</h5>
                    <img src={card.image_url ?? ''} alt="gif" />
                    <p className="message">{card.message}</p>

                    <p className="upvotes"><strong>Upvotes: </strong>{card.upvotes} </p>
                </div>
                <div className="comments">
                    <p>Comments:</p>
                    {
                        comments.map((comment: any) => {
                            return (
                                <div className="comment">
                                    <p className="comment-author">{comment.author ?? ''}</p>
                                    <p className="comment-message">{comment.comments ?? ''}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
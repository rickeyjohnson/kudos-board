import type { FC } from "react"
import type { BoardsListProps } from "../types/board"

const BoardsList: FC<BoardsListProps> = ({ boards }) => {
    return (
        <div className="boards-list">
            {
                boards.map(board => {
                    return <p>{JSON.stringify(board)}</p>
                })
            }
        </div> 
    )
}

export default BoardsList
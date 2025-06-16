import type { Board } from "../types/board";

const BoardDetails: React.FC<Board> = ({ board }) => {
    return (
        <div className="board-details">
            board details here
            <CardsList />
        </div>
    )
}
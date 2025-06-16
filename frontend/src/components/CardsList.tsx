import type { CardsListProps } from "../types/board";

const CardsList: React.FC<CardsListProps> = ({ cards }) => {
    return (
        <div className="cards-list">
            {
                cards.map(card => {
                    return <p>card</p>
                })
            }
        </div>
    )
}
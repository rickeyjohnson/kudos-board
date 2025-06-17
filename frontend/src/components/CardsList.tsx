import type { CardsListProps } from "../types/board";
import CardElement from "./Card";

const CardsList: React.FC<CardsListProps> = ({ cards }) => {
    return (
        <div className="cards-list">
            {
                cards.map(card => {
                    return <CardElement card={card} />
                })
            }
        </div>
    )
}

export default CardsList
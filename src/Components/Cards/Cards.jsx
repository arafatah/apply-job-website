import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>

        </div>
    );
};

export default Cards;
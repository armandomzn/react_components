import { CardProps } from "../data";
import Card from "./Card";

interface Props {
  cards: CardProps[];
  removeCard: (id: number) => void;
}

const Cards = ({ cards, removeCard }: Props) => {
  return (
    <section className="section">
      <div className="title">
        <h2>cards</h2>
      </div>
      <div className="underline"></div>

      <div className="cards">
        {cards.map((card) => {
          return <Card card={card} key={card.id} removeCard={removeCard} />;
        })}
      </div>
    </section>
  );
};

export default Cards;

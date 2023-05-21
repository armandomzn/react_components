import { CardProps } from "../data";
import { useState } from "react";

interface Props {
  card: CardProps;
  removeCard: (id: number) => void;
}

const Card = ({
  card: { id, image, name, price, info },
  removeCard,
}: Props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="card">
      <img src={image} alt={name} />
      <span className="card-price">${price.toFixed(2)}</span>
      <div className="card-info">
        <h3>{name}</h3>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="btn-info"
            onClick={() => setReadMore((prev) => !prev)}
          >
            {!readMore ? "read more" : "show less"}
          </button>
        </p>
      </div>
      <button
        type="button"
        className="btn btn-delete"
        onClick={() => removeCard(id)}
      >
        not interested
      </button>
    </article>
  );
};

export default Card;

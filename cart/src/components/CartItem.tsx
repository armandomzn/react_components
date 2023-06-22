import { useAppContext } from "../context";
import { CartItemProps } from "../interfaces/CartItemProps";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

interface Props {
  item: CartItemProps;
}
const CartItem = ({ item: { id, img, title, amount, price } }: Props) => {
  const { increment, decrement, removeItem } = useAppContext();
  return (
    <article className="cart-item">
      <div className="cart-image">
        <img src={img} alt={title} />
      </div>
      <div className="cart-info">
        <h4>{title}</h4>
        <span className="item-price">${price}</span>
        <button
          className="btn-remove"
          type="button"
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      <div className="cart-amount">
        <button
          className="decrease-btn"
          type="button"
          onClick={() => decrement(id)}
        >
          <AiFillMinusCircle />
        </button>
        <span className="amount">{amount}</span>
        <button
          className="increase-btn"
          type="button"
          onClick={() => increment(id)}
        >
          <AiFillPlusCircle />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

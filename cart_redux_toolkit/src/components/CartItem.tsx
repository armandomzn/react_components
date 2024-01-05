import { FaMinus, FaPlus } from "react-icons/fa6";
import { CartItemProps } from "../interfaces/CartItemProps";
import { useAppDispatch } from "../hooks/hooks";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

interface Props {
  item: CartItemProps;
}
const CartItem = ({ item: { id, img, price, title, amount } }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <article className="cart-item">
      <div className="cart-image">
        <img src={img} alt={title} />
      </div>
      <div className="cart-info">
        <h4>{title}</h4>
        <span className="item-price">${price}</span>
        <button
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="cart-amount">
        <button
          type="button"
          className="amount-icon"
          onClick={() => {
            if (amount <= 1) {
              dispatch(removeItem(id));
            }
            dispatch(decrease(id));
          }}
        >
          <FaMinus />
        </button>
        {amount}
        <button
          type="button"
          className="amount-icon"
          onClick={() => dispatch(increase(id))}
        >
          <FaPlus />
        </button>
      </div>
    </article>
  );
};
export default CartItem;

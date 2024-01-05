import { openModal } from "../features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, total, amount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (amount < 1 || cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h3>your bag</h3>
        </header>
        <h4 className="empty-cart">
          is currently empty
          <span> (reload the page to fill the cart again)</span>
        </h4>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h3>your bag</h3>
      </header>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="cart-total">
        <h5>total</h5>
        <div className="total-amount">${total.toFixed(2)}</div>
      </div>
      <button
        type="button"
        className="btn clear-btn"
        onClick={() => dispatch(openModal())}
      >
        clear cart
      </button>
    </section>
  );
};
export default CartContainer;

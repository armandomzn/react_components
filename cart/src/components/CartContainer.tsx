import { useAppContext } from "../context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { state, clearCart, totalCart } = useAppContext();
  const cartItems = Array.from(state.cart);

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h3>your bag</h3>
          <h4 className="empty-cart">
            is currently empty
            <span> (reload the page to fill the cart again)</span>
          </h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h3>your bag</h3>
      </header>
      <div className="items-container">
        {cartItems.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} item={item} />;
        })}
      </div>
      <footer>
        <div className="total-info">
          <h5>total</h5>
          <span className="total-amount">${totalCart.toFixed(2)}</span>
        </div>
        <button type="button" className="btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

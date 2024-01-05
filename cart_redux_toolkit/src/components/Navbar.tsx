import { useAppSelector } from "../hooks/hooks";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const { amount } = useAppSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h2>redux toolkit cart</h2>
        <span className="cart-shop-icon">
          <FaCartShopping />
          <span className="amount">{amount}</span>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;

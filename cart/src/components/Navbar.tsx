import { BsFillCartFill } from "react-icons/bs";
import { useAppContext } from "../context";

const Navbar = () => {
  const { totalAmount } = useAppContext();
  return (
    <nav>
      <div className="nav-center">
        <h2>cart with useReducer</h2>
        <div className="nav-container">
          <span className="nav-icon">
            <BsFillCartFill />
          </span>
          <div
            className="nav-amount"
            style={{
              width: `${totalAmount >= 100 ? "2rem" : "1.5rem"}`,
              height: `${totalAmount >= 100 ? "2rem" : "1.5rem"}`,
              left: `${totalAmount >= 100 ? "1rem" : "0.8rem"}`,
              top: `${totalAmount >= 100 ? "-.3rem" : "0"}`,
            }}
          >
            <p
              className="nav-amount-text"
              style={{
                fontSize: `${totalAmount >= 100 ? ".785rem" : ".875rem"}`,
              }}
            >
              {totalAmount}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

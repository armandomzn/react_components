import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Modal />
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

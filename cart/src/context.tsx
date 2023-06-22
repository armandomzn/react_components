import { createContext, useContext, useReducer } from "react";
import { ContextProps } from "./interfaces/ContextProps";
import { CartItemProps } from "./interfaces/CartItemProps";
import { InitialStateProps } from "./interfaces/InitialStateProps";
import reducer from "./reducer";
import { cart } from "./data";
import { REDUCER_ACTION_TYPES } from "./actions";
import { getTotals } from "./utils";

interface Props {
  children: React.ReactNode;
}

//* for reducer function
const initialState: InitialStateProps = {
  cart: new Map<string, CartItemProps>(
    cart.map((item) => {
      return [item.id, item];
    })
  ),
};

const AppContext = createContext<ContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be within AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: REDUCER_ACTION_TYPES.CLEAR_CART });
  };
  const increment = (id: string) => {
    dispatch({ type: REDUCER_ACTION_TYPES.INCREMENT_ITEM, payload: { id } });
  };
  const decrement = (id: string) => {
    dispatch({ type: REDUCER_ACTION_TYPES.DECREMENT_ITEM, payload: { id } });
  };
  const removeItem = (id: string) => {
    dispatch({ type: REDUCER_ACTION_TYPES.REMOVE_ITEM, payload: { id } });
  };
  const { totalAmount, totalCart } = getTotals(state.cart);
  return (
    <AppContext.Provider
      value={{
        state,
        clearCart,
        increment,
        decrement,
        totalAmount,
        totalCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

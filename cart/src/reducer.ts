import { REDUCER_ACTION_TYPES } from "./actions";
import { CartItemProps } from "./interfaces/CartItemProps";
import { InitialStateProps } from "./interfaces/InitialStateProps";

type ReducerAction = {
  type: REDUCER_ACTION_TYPES;
  payload?: {
    id?: string;
  };
};

const reducer = (state: InitialStateProps, action: ReducerAction) => {
  // Variables
  let cartItem: CartItemProps | undefined = undefined;
  let newItem: CartItemProps | undefined = undefined;
  let copyCart: Map<string, CartItemProps>;

  switch (action.type) {
    case REDUCER_ACTION_TYPES.INCREMENT_ITEM:
      if (!action.payload?.id) break;
      copyCart = new Map(state.cart);
      cartItem = copyCart.get(action.payload.id);
      if (!cartItem) break;
      newItem = { ...cartItem, amount: cartItem.amount + 1 };
      copyCart.set(action.payload.id, newItem);
      state = {
        ...state,
        cart: copyCart,
      };
      break;

    case REDUCER_ACTION_TYPES.DECREMENT_ITEM:
      if (!action.payload?.id) break;
      copyCart = new Map(state.cart);
      cartItem = copyCart.get(action.payload.id);
      if (!cartItem) break;
      if (cartItem.amount === 1) {
        copyCart.delete(action.payload.id);
        state = {
          ...state,
          cart: copyCart,
        };
        break;
      }
      newItem = { ...cartItem, amount: cartItem.amount - 1 };
      copyCart.set(action.payload.id, newItem);
      state = {
        ...state,
        cart: copyCart,
      };
      break;

    case REDUCER_ACTION_TYPES.CLEAR_CART:
      state = {
        ...state,
        cart: new Map(),
      };
      break;
      
    case REDUCER_ACTION_TYPES.REMOVE_ITEM:
      if (!action.payload?.id) break;
      copyCart = new Map(state.cart);
      copyCart.delete(action.payload.id);
      state = {
        ...state,
        cart: copyCart,
      };
      break;
  }
  return state;
};

export default reducer;

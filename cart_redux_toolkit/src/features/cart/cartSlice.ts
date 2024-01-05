import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartSliceProps } from "../../interfaces/CartSliceProps";
import { cartItems } from "../../data";

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
} as CartSliceProps;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
    },
    increase: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (!item) {
        return;
      }
      item.amount += 1;
    },
    decrease: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (!item) {
        return;
      }
      item.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * parseFloat(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, calculateTotals, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;

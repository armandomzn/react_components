import { CartItemProps } from "./interfaces/CartItemProps";

export const getTotals = (cart: Map<string, CartItemProps>) => {
  let totalAmount = 0;
  let totalCart = 0;
  for (const { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCart += amount * Number(price);
  }
  return { totalAmount, totalCart };
};

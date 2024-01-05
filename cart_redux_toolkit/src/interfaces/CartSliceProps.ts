import { CartItemProps } from "./CartItemProps";

export interface CartSliceProps {
  cartItems: CartItemProps[];
  amount: number;
  total: number;
}

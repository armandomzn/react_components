import { InitialStateProps } from "./InitialStateProps";

export interface ContextProps {
  state: InitialStateProps;
  clearCart: () => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  totalAmount: number;
  totalCart: number;
}

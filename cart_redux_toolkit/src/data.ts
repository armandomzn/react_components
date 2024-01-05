import { nanoid } from "nanoid";
import { CartItemProps } from "./interfaces/CartItemProps";
import { image1, image2, image3, image4, image5 } from "./images";

export const cartItems: CartItemProps[] = [
  {
    id: nanoid(),
    title: "Samsung Galaxy A54 5G 256GB 8GB Violet",
    price: "7899.99",
    amount: 1,
    img: image1,
  },
  {
    id: nanoid(),
    title: "Xiaomi 11T Pro 256GB 8GB Light Blue",
    price: "8799.99",
    amount: 1,
    img: image2,
  },
  {
    id: nanoid(),
    title: "Poco X5 Pro 5G 256GB 8GB Blue",
    price: "5999.99",
    amount: 1,
    img: image3,
  },
  {
    id: nanoid(),
    title: "Samsung Galaxy S21 FE 5G 256GB 8GB Green",
    price: "9989.99",
    amount: 1,
    img: image4,
  },
  {
    id: nanoid(),
    title: "Samsung Galaxy S20 FE 5G 128GB 6GB Navy Blue",
    price: "8239.99",
    amount: 1,
    img: image5,
  },
];

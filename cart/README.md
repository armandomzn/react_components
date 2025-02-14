# Cart Manager

This is a **React** project using **TypeScript** and **Vite** that allows users to manage their shopping cart efficiently. Users can add, remove, increase, and decrease the amount of items in the cart. The application uses **useReducer** for state management, **localStorage** for persisting data, and **react-icons** for icons. The interface is styled using pure CSS.

### Features:
- Add items to the cart with a unique ID using **nanoid**.
- Increment or decrement the amount of items.
- Remove items from the cart.
- Clear the entire cart.
- Persist cart data using **localStorage**.
- Display the total amount and price of items in the cart.
- Stylish and responsive interface using **pure CSS**.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/cart)

Once you've downloaded the project folder, follow the steps below to get it up and running.

---

### 1. Install Dependencies
In the root of the project folder, open a terminal and install the required dependencies with:

```sh
npm install
```
### 2. Run the Project in Development Mode
To start the development server, run the following command:

```sh
npm run dev
```

This will start the Vite development server and open the app in your default browser (usually at http://localhost:5173).

---

## Key Concepts:

### useReducer
  - `useReducer` is used to manage the cart state, including adding, removing, and updating items.

### localStorage
  - Used to persist the cart data between sessions by storing and retrieving the cart data.
### nanoid
  - A library used to generate unique IDs for cart items.

## Live demo
![cart](https://github.com/user-attachments/assets/e1cd87cf-aecc-478b-96ba-2458fde1005e)
- [Cart example using Context Api and Reducer to manage state](https://sunny-queijadas-9e66a2.netlify.app/)

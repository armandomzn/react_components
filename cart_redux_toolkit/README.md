# Shopping Cart Redux Toolkit

This is a **React** project using **TypeScript** and **Redux Toolkit** that provides a fully functional shopping cart. Users can add, remove, and modify items in their cart while tracking total amounts dynamically. The application ensures state management using **Redux Toolkit** and updates totals automatically when cart items change.

## Features:
- Add and remove items from the cart.
- Increase or decrease item quantities.
- Automatically update the total price and item count.
- Persist cart state using Redux Toolkit.
- A modal confirmation before clearing the cart.
- Responsive design for mobile and desktop views.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/cart_redux_toolkit)

Once you've downloaded the project folder, follow the steps below to get it up and running.

---

### 1. Install Dependencies
In the root of the project folder, open a terminal and run:

```sh
npm install
```

### 2. Run the Project in Development Mode
To start the development server, execute:

```sh
npm run dev
```

This will launch the Vite development server and open the app in your default browser (usually at http://localhost:5173).

---

## Key Concepts:

### useEffect
- Used to dispatch the `calculateTotals` function whenever cart items change.

### Redux Toolkit
- Manages global state for cart items and modal visibility.
- Uses `createSlice` to define reducers for handling cart operations.

### React Hooks
- **useAppDispatch** and **useAppSelector** provide type-safe Redux state management.

### Modal Component
- Provides a confirmation dialog before clearing all cart items.

---
## Live Demo
![cart_redux_toolkit_1](https://github.com/user-attachments/assets/5ad6d45e-c482-4f05-b5d1-8860f931f767)
![cart_redux_toolkit_2](https://github.com/user-attachments/assets/d8076968-30c2-48cc-8991-4cd67ee5b575)
- [Cart Example using Redux Toolkit to manage state](https://statuesque-blini-1d1140.netlify.app/)

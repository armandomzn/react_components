# Menu

This is a **React** project using **TypeScript** and **Vite**, where users can browse through a menu of items organized by categories. The app uses **React Hooks** `(useState)` to manage the selected categories and dynamically update the menu.
### Features:
- Displays a list of menu items with their descriptions, prices, and images.
- Users can filter the menu items by category.
- The state is managed through useState to update the menu based on the selected category.
- The interface is styled using pure CSS for a clean and simple design.
- The menu data is imported from a data.ts file.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/menu)

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

## Key Concepts: React Hooks

### useState
- Used to track the selected category and menu items displayed.
- The state-changing method is passed down to child components (Categories, Menu, MenuItem).
- Updates the UI dynamically as users select different categories.

## Live demo
![menu](https://github.com/user-attachments/assets/81a2b24a-c0a7-447d-868e-7c8c45381b2c)
- [Dynamic Menu with Filtering (useState).](https://magnificent-sundae-57951c.netlify.app/)

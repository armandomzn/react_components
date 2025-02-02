# Cards

This is a **React** project using **TypeScript** and **Vite**, where users can remove cards and reset them. The app makes extensive use of **React Hooks** (`useState` and `useEffect`) for managing state and handling side effects such as data fetching and toggling the "Read More" functionality.

### Features:
- Remove cards by clicking the "Not Interested" button.
- Refresh and reset the cards using the "Refresh" button.
- "Read More" functionality to toggle card descriptions.
- Data is fetched using `useEffect` when the component mounts.
---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/cards)

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
useState & useEffect

    useState:
        Used for managing the state of the cards (cards).
        Used to manage the loading state (isLoading).
        Also used to manage the "Read More" functionality (readMore in individual cards).
    useEffect:
        Responsible for loading the initial card data when the component mounts. It runs once and triggers fetchData to fetch the card data.
        
## Live demo
  ![cards](https://github.com/user-attachments/assets/8f68cfc2-a55f-4ca3-9cf6-3ec7d13e4bef)
- [Cards with useEffect and useState hooks](https://beautiful-tiramisu-b20117.netlify.app/)


# Image Gallery App
This is a **React** project using **TypeScript**, **React Query**, and **Vite** that allows users to search for and view images from the **Pexels API**. The application supports dark mode, saves user preferences such as search term and page number to **localStorage**, and displays images with relevant details. The interface is styled using CSS.
### Features:
- Search for images using the **Pexels API** based on a user-provided search term.
- Navigate through paginated results.
- Toggle between dark and light themes.
- Persist search term and page number using **localStorage**.
- Display image details including photographer name and a link to the full-size image.
- Styled with CSS for a clean, user-friendly interface.
- User must provide their **Pexels API key**.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/pexels-react-query)

Once you've downloaded the project folder, follow the steps below to get it up and running.

---

### 1. Install Dependencies
In the root of the project folder, open a terminal and install the required dependencies with:

```sh
npm install
```
### 2. Set Up Your Pexels API Key
Before running the project, you need to provide your **Pexels API key**. To do this:
 1. Sign up for an account at Pexels.
 2. Once you have an API key, create a .env file in the root of your project and add the following line:
```sh
VITE_API_KEY=your-pexels-api-key
```
### 3. Run the Project in Development Mode
To start the development server, run the following command:

```sh
npm run dev
```

This will start the Vite development server and open the app in your default browser (usually at http://localhost:5173).

---

## Key Concepts:

### useState & useContext
  - `useState` is used to manage state such as dark mode, search term, and page number.
  - `useContext` is used to provide and access global state within the app.

### react-query
  - Used to fetch images from the Pexels API and manage the loading state, errors, and data.

### localStorage
  - Used to persist user preferences such as the search term and page number across sessions.
### Dark Mode
- The app supports toggling between dark and light modes using the `useState` hook and `localStorage` for persistence.

## Live demo
![pexels](https://github.com/user-attachments/assets/d14a53fc-4ac3-4f0c-adf7-81b8f63192e4)
- [Gallery consuming pexels api using react query](https://sprightly-taffy-402a24.netlify.app/)

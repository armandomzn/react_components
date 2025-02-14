# Cocktail API
This is a **React** project using **TypeScript**, **React Query**, and **Vite** that allows users to explore cocktail recipes. Users can search for cocktails, view their details, and check ingredients and instructions. The app interacts with the **CocktailDB API** to fetch cocktail data.
### Features:
- Search for cocktails by name.
- View details of each cocktail, including ingredients and instructions.
- Use **React Query** for data fetching and caching.
- Mobile-friendly navigation with a responsive design.
- Detailed error handling for missing pages and API errors.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/cocktail-api-router)

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

### useState & useEffect
  - `useState` is used for managing state in various components (e.g., search input, navbar visibility).
  - `useEffect` is used for handling side effects like window resizing in the Navbar component.

### React Router
  - Used for navigating between different pages in the app, such as the landing page, cocktail details, and about page.

### React Query
  - Utilized for fetching and caching cocktail data from the CocktailDB API.

### Error Boundaries
  - Error handling is implemented for API errors and missing pages with custom error pages.

## Live demo
![cocktail-api](https://github.com/user-attachments/assets/3e7628ea-0e36-485f-8ad6-4926c5be4c65)
- [Application using react router dom and react query](https://incredible-cuchufli-f6e6bd.netlify.app/)

# React Components Showcase
Creation of reusable React components for the modularization of web pages using React and TypeScript. This repository features a collection of reusable web development components that demonstrate various techniques and concepts in React, providing modular solutions for common UI elements and interactions.

## Projects

### 1. [Cards](https://beautiful-tiramisu-b20117.netlify.app/)
![cards](https://github.com/user-attachments/assets/148e0244-399b-4f7c-88f6-8cd60e00c8c5)
A component to display cards with dynamic content, utilizing the `useEffect` and `useState` hooks.

### 2. [Reviews](https://sage-crisp-b4c150.netlify.app/)
![reviews](https://github.com/user-attachments/assets/554d28c3-d365-4165-8cd3-015e8093124b)
A project to display random reviews, including images, names, and text, with navigation functionality using `useState`.

### 3. [Navbar](https://comforting-faloodeh-6bd6c6.netlify.app/)
![navbar](https://github.com/user-attachments/assets/8d12f519-455c-4ac4-8268-0a50140cd4fd)
A responsive navigation bar that adjusts dynamically based on screen size, implemented with `useState`, `useEffect`, and `useRef`.

### 4. [Sidebar Modal](https://graceful-pothos-48b1d5.netlify.app/)
![sidebar-modal-1](https://github.com/user-attachments/assets/9ee10ddc-e06a-4a14-97a6-ebc8c1821c45)
An interactive sidebar with modal functionality for displaying additional content, using `Context API` for state management.

### 5. [Modal](https://boisterous-tapioca-5dc5a2.netlify.app/)
![modal](https://github.com/user-attachments/assets/900422a8-1839-4209-b360-0cd268edbe00)
A simple modal component that opens and displays content dynamically, built using `useState` hook.

### 6. [Accordion](https://unique-truffle-f87e44.netlify.app/)
![accordion](https://github.com/user-attachments/assets/aab28152-b4d1-4fef-97da-823e4bb3e79c)
An accordion component that opens only one element at a time, demonstrating state management with React.

### 7. [Menu](https://magnificent-sundae-57951c.netlify.app/)
![menu](https://github.com/user-attachments/assets/42ddc000-4083-45f2-9d29-9953c9309ba8)
A menu component that filters and displays items from a dataset, utilizing the `useState` hook for state management.

### 8. [Tabs](https://stellular-cobbler-1e47a7.netlify.app/)
![tabs](https://github.com/user-attachments/assets/7b97c783-065d-454f-9eac-ad710242447f)
A dynamic tab component that updates the displayed content based on the selected tab index, using `useState`.

### 9. [Slider](https://glowing-bubblegum-a992ff.netlify.app/)
![slider](https://github.com/user-attachments/assets/ce4e05f1-02b6-4908-9f57-373f1e950234)
A sliding component that dynamically updates the content, powered by `useState` and `useEffect` hooks.

### 10. [Lorem Ipsum Generator](https://lustrous-gingersnap-a23de8.netlify.app/)
![lorem-ipsum](https://github.com/user-attachments/assets/ea64480b-8f8b-4164-b212-23a28ab5d204)
A dynamic Lorem Ipsum text generator using `useState` for input states and text generation.

### 11. [Color Generator](https://golden-pasca-f1b1a8.netlify.app/)
![color-generator](https://github.com/user-attachments/assets/8b64eb49-31f0-4ed0-a702-5717a39aadf6)
A color generator that outputs random colors in RGB and HEX formats, implemented with `useState` and `useEffect`.

### 12. [Task Manager](https://strong-druid-eb378d.netlify.app/)
![task-manager](https://github.com/user-attachments/assets/bcb53dc1-e0ef-4f88-8020-4b15e6a61f3d)
A simple task manager that stores tasks in the browser's localStorage, utilizing `useState`.

### 13. [Cart Reducer](https://sunny-queijadas-9e66a2.netlify.app/)
![cart](https://github.com/user-attachments/assets/e511cce5-90d2-4a75-9792-213d1a11aae1)
A cart example using `Context API` and a reducer to manage state for adding and removing items.

### 14. [Pexels API with React-Query](https://sprightly-taffy-402a24.netlify.app/)
![pexels](https://github.com/user-attachments/assets/6ac76b76-d152-4bb0-96f7-aa5c2be218f8)
A gallery component fetching images from the Pexels API, utilizing React Query for data fetching and caching.

### 15. [Cocktails API with React Router Dom and React Query](https://incredible-cuchufli-f6e6bd.netlify.app/)
![cocktail-api](https://github.com/user-attachments/assets/d4582a21-17a1-48a4-baa4-dc6731d51cb2)
An app that fetches cocktail recipes from an API, using React Router Dom for navigation and React Query for data fetching.

### 16. [Tailwind Portfolio with React](https://sprightly-hummingbird-355115.netlify.app/)
![tailwind-portfolio](https://github.com/user-attachments/assets/6ca32f71-5935-4f17-9f81-b20522f74a1b)
A portfolio project showcasing Tailwind CSS and React for styling and layout.

### 17. [Strapi Menu](https://ornate-dragon-6c5bb2.netlify.app/)
![strapi_menu-1](https://github.com/user-attachments/assets/7530f046-78cf-46c5-b0db-388ad6032968)
A dynamic menu fetching data from Strapi, using `useState`, `useRef`, and `Context API` for state management.

### 18. [Redux Toolkit Cart](https://redux-toolkit-cart.netlify.app/)
![cart_redux_toolkit_1](https://github.com/user-attachments/assets/ed91c334-d498-4dc0-9730-8efbe087312d)
![cart_redux_toolkit_2](https://github.com/user-attachments/assets/d4a78a23-9ea0-4636-882f-93a68bff4365)
A cart management system using **Redux Toolkit**, allowing users to add, remove, and update cart items with a global state.

---

# Installation and Setup
Each project in this repository has its own `README.md` file with specific installation and usage instructions. However, below are the general steps to clone, install, and run any of the projects local.

## Clone the Repository
```sh
git clone https://github.com/armandomzn/react_components.git
```
## Install Dependencies
Navigate to the specific project folder and install dependencies:
```sh
cd project-folder-name
npm install 
```
## Run the Project
Start the development server:
```sh
npm run dev 
```
This will launch the project on http://localhost:5173/ or the designated port.
## Build the Project
To create an optimized production build:
```sh
npm run build
```
The build files will be available in the `build` directory.

---

## Key Concepts Across Projects

  - **Redux Toolkit**: The **Redux Toolkit Cart** project demonstrates efficient global state management in React using Redux Toolkit.
  - **Component Reusability**: The main focus is to create modular components that can be reused across different projects.
  - **State Management**: Components use React's `useState`, `useEffect`, `useContext`, `useReducer`, and **Redux Toolkit** for managing state.
  - **API Integration**: Several components fetch data from external APIs, such as the **Cocktails API**, **Pexels API**, and **Strapi**.
  - **Responsive Design**: Many components are responsive, utilizing Tailwind CSS for styling and layout.
  - **React Query**: Used for data fetching and caching, such as in the **Pexels API** component.
  - **React Router Dom**: For navigation within the app, demonstrated in the **Cocktails API** project.
  - **TypeScript**: Each component is developed with TypeScript for enhanced developer experience and type safety.
Each project includes its own detailed installation and usage instructions in its respective README.md file.

# Navbar

This is a **React** project using **TypeScript** that implements a responsive **Navbar**. The Navbar adjusts based on the window size and includes an animated menu toggle for mobile devices. The social media links are customizable, and the Navbar adapts its layout accordingly.

### Features:
- Responsive design that adjusts to different screen sizes.
- Toggleable menu on smaller screens using a hamburger icon.
- Dynamic navigation links rendered from an array.
- Social media links with custom icons (using **react-icons**).
- Customizable through the `pageLinks` and `socialLinks` arrays.
- Uses **useState**, **useEffect**, and **useRef** hooks to manage state and DOM references.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/navbar)

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

### Key Concepts:
- useState

    - useState is used to manage the visibility of the menu (showLinks) and the window size (windowSize).

- useEffect

    - useEffect is used to listen for window resize events and adjust the state accordingly.

- useRef

    - useRef is used to store a reference to the container of navigation links, helping to measure its height for responsive adjustments.
## Live demo
![navbar](https://github.com/user-attachments/assets/e423cebc-e3bf-4fe2-97aa-19702bd7ac65)
![navbar-1](https://github.com/user-attachments/assets/0600c927-87a0-493d-87c3-17a71b5fb410)
- [Responsive Navbar using useState, useEffect and useRef hooks](https://comforting-faloodeh-6bd6c6.netlify.app/)

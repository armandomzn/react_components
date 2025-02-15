# Strapi Menu

This is a **React** project using **TypeScript** and **Vite** that implements a dynamic navigation menu. It features a **responsive design**, supporting both **medium/large screens** with a hover-based submenu and **small screens** with a sidebar.

### Features:
- Responsive navigation menu.
- Sidebar menu for small screens.
- Submenu with hover effect for larger screens.
- Uses **React Context API** for state management.
- Styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/strapi_menu)

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

    - Used to manage the sidebar state (isSideBarOpen) and submenu state (pageId).

  - useContext

    - Allows components to access and update the global state defined in Context.tsx.
  - useRef

    - Used in SubMenu.tsx to track the submenu's position and detect when the mouse leaves its area.

## Live Demo
![strapi_menu-1](https://github.com/user-attachments/assets/d1c78f34-66bb-487a-91ff-ac067d78d67e)
![strapi_menu-2](https://github.com/user-attachments/assets/7acc73c3-aa63-4a61-8db7-e7fe191510be)
![strapi_menu-3](https://github.com/user-attachments/assets/0ca7f89f-87c7-4126-aa4d-1b3d1d9ae5a6)
- [Dynamic Menu using Context API, useState & useRef.](https://ornate-dragon-6c5bb2.netlify.app/)

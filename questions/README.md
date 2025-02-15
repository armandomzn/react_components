# Questions

This is a **React** project using **TypeScript** and **Vite**, where users can navigate through a set of questions. The app makes use of **React Hooks** (`useState`) to manage the currently selected question.

### Features:
- Display a list of questions from a JSON file.
- Select a question to view its details.
- Update the currently selected question using a passed-down method.
- The state management is handled through `useState`.
- Simple CSS is used for styling the interface.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/questions)

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
- Used to track the **currently selected question ID**.
- The state-changing method is passed down to child components (`Questions` and `SingleQuestion`).
- Updates the UI dynamically as users select different questions.

## Live demo
![questions](https://github.com/user-attachments/assets/8cf8d141-a0de-42a2-96ca-97c51f70b442)
- [FAQ Accordion with useState Hook.](https://calm-sunflower-94db63.netlify.app/)

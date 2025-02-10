# Slider
This is a **React** project using **TypeScript** and **Vite** that displays a slider showcasing people’s information. Each slide includes a person's name, job title, image, and description, with navigation buttons for previous and next slides. The data is imported from a data.ts file, and the styling is done with pure CSS for a clean, minimalist interface.
### Features:
- Displays a slider of individuals, where each slide shows a person's image, name, job title, and description.
- Users can navigate through the slides using the previous and next buttons.
- The slides automatically transition every 2 seconds, using the useEffect hook to trigger the automatic change.
- The current slide is dynamically styled using inline styles based on the state to give a smooth sliding effect.
- The app uses React Hooks (useState, useEffect) to manage state and side effects.
- The interface is styled using pure CSS for a clean, minimalist design.
- The person data is imported from a data.ts file.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/slider)

Once you've downloaded the project folder, follow the steps below to get it up and running.

---

### 1. Install Dependencies
In the root of the project folder, open a terminal and install the required dependencies with:

sh
npm install



### 2. Run the Project in Development Mode

To start the development server, run the following command:

sh
npm run dev


This will start the Vite development server and open the app in your default browser (usually at http://localhost:5173).

---

## Key Concepts: React Hooks

### useState
  - useState is used to manage the current slide (currentPerson), which determines which person’s data is displayed in the slider.

### useEffect
  - The useEffect hook is used to automatically change the slide every 2 seconds by calling the nextSlide function. The interval is cleared when the component unmounts or the currentPerson state changes.

## Live demo
![slider](https://github.com/user-attachments/assets/c00f0b3a-9db8-4b4a-b4ca-9d05760cde58)
- [Slider with useState and useEffect hooks](https://glowing-bubblegum-a992ff.netlify.app/)

# Color generator
This is a **React** project using **TypeScript** and **Vite** that generates color palettes based on user input. Users can select a color, adjust its weight, generate a random color, and copy the hex code of any color to the clipboard. The interface is styled using pure CSS.
### Features:
- Generates color palettes based on a selected color.
- Users can adjust the weight of the generated colors.
- Random color generator button.
- Allows users to copy the hex code of a color to the clipboard.
- Uses the values.js library to generate color variations.
- Uses nanoid to generate unique keys for each color.
- The interface is styled using pure CSS.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/color_generator)

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

## Key Concepts:

### useState
  - useState is used to manage the selected color, the weight of the generated colors, and the list of color variations.

### useEffect
  - useEffect is used to update the color variations automatically when the weight value changes.
### Toast Notifications
  - react-toastify is used to display success or error messages when copying a color to the clipboard or handling input errors.

## Live demo
![color-generator](https://github.com/user-attachments/assets/0e455fcf-fa8b-437d-8ba3-b4ca099c6841)
- [Color generator with input states using useState and useEffect hooks](https://golden-pasca-f1b1a8.netlify.app/)

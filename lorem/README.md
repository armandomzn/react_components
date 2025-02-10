# Lorem Ipsum Generator
This is a **React** project using **TypeScript** and **Vite** that generates random Lorem Ipsum text in various formats. Users can select the type of text they want (paragraphs, sentences, or words), specify the amount of text to generate, and then click the "Generate" button to see the result. The data is imported from a `data.ts` file, and the interface is styled using pure CSS for a clean, minimalist design.
### Features:
- Generates random Lorem Ipsum text in the following formats: paragraphs, sentences, or words.
- Users can choose the amount of text to generate (from 1 to 30).
- The generated text is displayed dynamically, with each new submission.
- The app uses React Hooks (useState) to manage the state of the selected format and amount.
- The text is shuffled each time it's generated using the `shuffle-array` library for randomness.
- The app uses **nanoid** to generate unique keys for each text item in the display.
- The interface is styled using pure CSS for a clean, minimalist design.
- The text data is imported from a `data.ts` file.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/lorem)

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
  - useState is used to manage the state of the selected text format (loremText), the amount of text to generate (amount), and the generated Lorem Ipsum text itself (lorem).


## Live demo
![lorem-ipsum](https://github.com/user-attachments/assets/ef0446a1-a61b-483e-bc5c-11a4980957b5)
- [Lorem ipsum generator with input states using useState hook](https://lustrous-gingersnap-a23de8.netlify.app/)

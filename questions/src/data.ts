export interface Question {
  id: number;
  title: string;
  info: string;
}

export const data: Question[] = [
  {
    id: 1,
    title: "How do I use the React component?",
    info: "To use the React component, you need to import it into your project and include it in your code. You can then pass any required props to the component and render it in your application.",
  },
  {
    id: 2,
    title: "What are the props accepted by the React component?",
    info: "The props accepted by the React component depend on its implementation. Check the component's documentation or source code to see what props it expects and how to use them",
  },

  {
    id: 3,
    title: "Can I customize the styling of the React component?",
    info: "Yes, you can customize the styling of the React component. You can apply CSS classes or inline styles to modify its appearance, or use CSS-in-JS solutions like styled-components or Emotion to define styles directly in your component.",
  },
  {
    id: 4,
    title: "How can I handle events emitted by the React component?",
    info: "To handle events emitted by the React component, you can define event handlers in your parent component and pass them as props to the component. The component can then trigger those event handlers when necessary.",
  },
  {
    id: 5,
    title:
      "How can I handle data fetching or API calls within the React component?",
    info: " You can handle data fetching or API calls within the React component using libraries like Axios, Fetch API, or by using built-in React features like useEffect or lifecycle methods. The specific approach may depend on your project's requirements and architectural decisions.",
  },
];

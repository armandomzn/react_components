import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Values from "values.js";
import Form from "./components/Form";
import ColorList from "./components/ColorList";

function App() {
  const [colors, setColors] = useState<Values[]>(new Values("#0099ff").all(10));

  const addColor = (color: string, weight = 10) => {
    try {
      setColors(new Values(color).all(weight));
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="bottom-right" />
    </main>
  );
}

export default App;

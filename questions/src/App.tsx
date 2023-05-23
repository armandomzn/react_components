import { useState } from "react";
import Questions from "./components/Questions";
import { data } from "./data";
function App() {
  const [questions, _] = useState(data);
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggleQuestion = (id: number) => {
    console.log(id);
    
    setActiveId((prev) => {
      console.log(prev);

      return prev === id ? null : id;
    });
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default App;

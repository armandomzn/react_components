import { useState } from "react";
import Questions from "./components/Questions";
import { data } from "./data";
function App() {
  const [questions, _] = useState(data);
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggleQuestion = (id: number) => {    
    setActiveId((prev) => {
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

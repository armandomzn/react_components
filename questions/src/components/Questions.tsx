import { Question } from "../data";
import SingleQuestion from "./SingleQuestion";

interface Props {
  questions: Question[];
  activeId: null | number;
  toggleQuestion: (id: number) => void;
}
const Questions = ({ questions, activeId, toggleQuestion }: Props) => {
  return (
    <section className="section">
      <div className="title">
        <h1>questions</h1>
        <div className="underline"></div>
      </div>
      <div className="questions">
        {questions.map((question) => {
          return (
            <SingleQuestion
              question={question}
              key={question.id}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Questions;

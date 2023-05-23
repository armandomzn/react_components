import {
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { Question } from "../data";

interface Props {
  question: Question;
  activeId: null | number;
  toggleQuestion: (id: number) => void;
}

const SingleQuestion = ({
  question: { id, title, info },
  toggleQuestion,
  activeId,
}: Props) => {
  const isActive = activeId === id;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          type="button"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;

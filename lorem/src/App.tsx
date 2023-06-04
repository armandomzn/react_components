import { useState } from "react";
import { paragraphs, sentences, words } from "./data";
import shuffle from "shuffle-array";
import { nanoid } from "nanoid";

const options = ["paragraphs", "words", "sentences"];

function App() {
  const [lorem, setLorem] = useState<string[]>([]);
  const [loremText, setLoremText] = useState("paragraphs");
  const [amount, setAmount] = useState(1);

  const checkArray = (array: string[]): string[] => {
    return shuffle(array.slice(0, amount));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (loremText) {
      case "paragraphs":
        setLorem(checkArray(paragraphs));
        break;
      case "sentences":
        setLorem(checkArray(sentences));
        break;
      default:
        setLorem(checkArray(words));
    }
  };

  return (
    <section className="section">
      <div className="title">
        <h3>lorem ipsum generator</h3>
        <div className="underline"></div>
      </div>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <select
          name="lorem"
          id="lorem"
          className="lorem-options"
          value={loremText}
          onChange={(e) => setLoremText(e.target.value)}
        >
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={30}
          step={1}
          className="lorem-amount"
          onChange={(e) => setAmount(parseInt(e.target.value))}
          value={amount}
        />
        <input type="submit" value="generate" className="btn lorem-btn" />
      </form>
      {lorem.length > 0 && (
        <article className="lorem-text">
          {lorem.map((lorem) => {
            return <p key={nanoid()}>{lorem}</p>;
          })}
        </article>
      )}
    </section>
  );
}

export default App;

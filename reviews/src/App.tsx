import { useState } from "react";
import { reviews } from "./data";
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = reviews[index];
  const nextReview = () => {
    setIndex((prev) => {
      return (prev + 1) % reviews.length;
    });
  };

  const prevReview = () => {
    setIndex((prev) => {
      return (prev - 1 + reviews.length) % reviews.length;
    });
  };

  const randomReview = () => {
    setIndex((prev) => {
      let randomNumber = Math.floor(Math.random() * reviews.length);
      if (randomNumber === index) {
        randomNumber = prev + 1;
      }
      return randomNumber % reviews.length;
    });
  };

  return (
    <main className="main">
      <section className="section">
        <div className="section-title">
          <h2>reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="image-review" />
            <span className="icon-quote">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" type="button" onClick={prevReview}>
              <FaAngleLeft />
            </button>
            <button className="next-btn" type="button" onClick={nextReview}>
              <FaAngleRight />
            </button>
          </div>
          <button
            type="button"
            className="btn btn-review"
            onClick={randomReview}
          >
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;

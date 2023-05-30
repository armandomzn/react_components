import { useEffect, useState } from "react";
import { slides } from "./data";
import { SlideProps } from "./interfaces/SlideProps";
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function App() {
  const [persons, _] = useState<SlideProps[]>(slides);
  const [currentPerson, setPerson] = useState<number>(0);
  const nextSlide = (): void => {
    setPerson((prev) => {
      return (prev + 1) % persons.length;
    });
  };
  const prevSlide = (): void => {
    setPerson((prev) => {
      return (prev - 1 + persons.length) % persons.length;
    });
  };

  useEffect(() => {
    let slideId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(slideId);
    };
  }, [currentPerson]);

  return (
    <main className="main">
      <section className="section-center">
        <div className="section-title">
          <h2>slider</h2>
          <div className="underline"></div>
        </div>
        {persons.map(({ id, image, name, job, text }, personIndex) => {
          return (
            <article
              className="slider"
              key={id}
              style={{
                transform: `translateX(${
                  (personIndex - currentPerson) * 100
                }%)`,
                overflow: personIndex === currentPerson ? "visible" : "hidden",
                opacity: personIndex === currentPerson ? 1 : 0,
                visibility:
                  personIndex === currentPerson ? "visible" : "hidden",
              }}
            >
              <div className="img-container">
                <img src={image} alt={name} className="slider-photo" />
                <span className="icon-quote">
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className="author">{name}</h4>
              <p className="job">{job}</p>
              <p className="info">{text}</p>
              <button className="prev" type="button" onClick={prevSlide}>
                <FaAngleLeft />
              </button>
              <button className="next" type="button" onClick={nextSlide}>
                <FaAngleRight />
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;

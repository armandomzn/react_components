import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { CardProps, data } from "./data";
import Cards from "./components/Cards";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<CardProps[]>([]);

  const removeCard = (id: number) => {
    setCards((prev) => {
      return prev.filter((card) => {
        return card.id !== id;
      });
    });
  };

  const fetchData = () => {
    setIsLoading(true);
    try {
      setCards(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (cards.length === 0) {
    return (
      <main>
        <section className="section">
          <div className="title">
            <h2>No cards left</h2>
          </div>
          <div className="underline"></div>

          <button type="button" className="btn btn-center" onClick={fetchData}>
            refresh
          </button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Cards cards={cards} removeCard={removeCard} />
    </main>
  );
}

export default App;

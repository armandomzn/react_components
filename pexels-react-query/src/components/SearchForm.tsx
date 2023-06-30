import { FormEvent, useRef } from "react";
import { useAppContext } from "../context";
const SearchForm = () => {
  const { setSearchTerm, setPageNumber, pageNumber, searchTerm } =
    useAppContext();
  const searchInputRefContainer = useRef<null | HTMLInputElement>(null);
  const numberInputRefContainer = useRef<null | HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !searchInputRefContainer.current ||
      !searchInputRefContainer.current.value ||
      !numberInputRefContainer.current ||
      !numberInputRefContainer.current.value
    ) {
      return;
    }
    setSearchTerm(searchInputRefContainer.current.value);
    setPageNumber(parseInt(numberInputRefContainer.current.value));
  };

  return (
    <section className="search-form">
      <div className="section-title">
        <h1>pexels api with react-query</h1>
        <div className="underline"></div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            className="form-input search-input"
            placeholder="bear"
            name="search"
            defaultValue={searchTerm}
            ref={searchInputRefContainer}
          />
          <input
            type="number"
            className="form-input number-input"
            min={1}
            step={1}
            max={100}
            name="number"
            defaultValue={pageNumber}
            ref={numberInputRefContainer}
          />
          <input type="submit" value="submit" className="form-input btn" />
        </div>
      </form>
    </section>
  );
};
export default SearchForm;

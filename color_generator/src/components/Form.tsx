import { useEffect, useState } from "react";
import { IoIosColorWand } from "react-icons/io";
import { TbPercentage } from "react-icons/tb";
import { FaRandom } from "react-icons/fa";
import { getHexColor } from "../utils/utils";

interface Props {
  addColor(color: string, weight: number): void;
}

const Form = ({ addColor }: Props) => {
  const [color, setColor] = useState("#087ea4");
  const [weight, setWeight] = useState(20);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addColor(color, weight);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    addColor(color, weight);
  };

  const handleRandomColor = () => {
    const color = getHexColor();
    setColor(color);
    addColor(color, weight);
  };

  useEffect(() => {
    addColor(color, weight);
  }, [weight]);

  return (
    <section className="section-center">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="first-column">
          <h2>color generator</h2>
          <div className="container-icon-color">
            <span className="color-icon">
              <IoIosColorWand />
            </span>
            <div className="input-color-container">
              <input type="color" value={color} onChange={handleOnChange} />
            </div>
          </div>
          <input
            type="text"
            className="text-color"
            placeholder="#512bd4"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onFocus={(e) => e.target.classList.add("bold")}
            onBlur={(e) => e.target.classList.remove("bold")}
          />
          <div className="number-input">
            <span className="number-icon">
              <TbPercentage />
            </span>
            <input
              type="number"
              step={0.1}
              min={1}
              max={100}
              value={weight || 1}
              onChange={(e) => setWeight(Number(e.target.value))}
              onFocus={(e) => e.target.classList.add("bold")}
              onBlur={(e) => e.target.classList.remove("bold")}
            />
          </div>
        </div>
        <button
          type="button"
          className="random-btn btn"
          onClick={handleRandomColor}
        >
          <FaRandom />
        </button>
        <button type="submit" className="hide-btn"></button>
      </form>
    </section>
  );
};

export default Form;

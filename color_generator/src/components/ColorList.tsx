import { ColorProps } from "../interfaces/ColorProps";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

interface Props {
  colors: ColorProps[];
}
const ColorList = ({ colors }: Props) => {
  return (
    <section className="colors-section">
      {colors.map((color) => {
        return (
          <SingleColor
            color={color}
            key={nanoid()}
          />
        );
      })}
    </section>
  );
};

export default ColorList;

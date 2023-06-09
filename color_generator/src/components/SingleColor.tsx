import { ColorProps } from "../interfaces/ColorProps";
import { AiFillCopy } from "react-icons/ai";
import { TbChartCircles } from "react-icons/tb";
import { toast } from "react-toastify";
import { isLightOrDark } from "../utils/utils";

interface Props {
  color: ColorProps;
}

const SingleColor = ({ color }: Props) => {
  const { weight, hex } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success(`“#${hex}" copied to clipboard`);
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      className={`color-item ${
        isLightOrDark(color.rgb) === "light" ? "dark" : "light"
      }`}
      style={{
        backgroundColor: `#${hex}`,
      }}
    >
      <div className="color-info">
        <div className="weight">
          <TbChartCircles />
          <p className="weight-value">{weight.toFixed(1)}%</p>
        </div>
        <p className="hex-value">#{hex}</p>
      </div>
      <span className="color-item-icon" onClick={saveToClipBoard}>
        <AiFillCopy />
      </span>
    </article>
  );
};

export default SingleColor;

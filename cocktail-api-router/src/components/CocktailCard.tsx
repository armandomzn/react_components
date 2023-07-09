import { Link } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/CocktailCard";

interface Props {
  id: string;
  name: string;
  info: string;
  image: string;
  glass: string;
}
const CocktailCard = ({ id, name, info, image, glass }: Props) => {
  return (
    <Wrapper>
      <div className="cocktail-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-card-info">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className="btn">more info</Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;

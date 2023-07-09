import { Wrapper } from "../assets/wrappers/CocktailList";
import { DrinkProps } from "../interfaces/DrinkProps";
import CocktailCard from "./CocktailCard";

interface Props {
  drinks: DrinkProps[] | null | undefined;
}
const CocktailList = ({ drinks }: Props) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No Matching Cocktails Found...</h4>
    );
  }
  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard {...drink} key={drink.id} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;

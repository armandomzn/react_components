import axios from "axios";
import { Wrapper } from "../assets/wrappers/Cocktail";
import { DrinkApiProps } from "../interfaces/DrinkApiProps";
import { DrinkProps } from "../interfaces/DrinkProps";
import {
  Link,
  Navigate,
  useLoaderData,
  LoaderFunctionArgs,
} from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getQueryCocktail = (id: string | null | undefined) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailUrl}${id}`);
      if (!Array.isArray(data.drinks)) {
        return null;
      }
      const drink: DrinkProps[] = data.drinks.map((drink: DrinkApiProps) => {
        const ingredients: string[] = Object.keys(drink)
          .filter((element: string) => {
            return (
              element.startsWith("strIngredient") &&
              drink[element as keyof DrinkApiProps]
            );
          })
          .map((key) => {
            return drink[key as keyof DrinkApiProps];
          });
        return {
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          info: drink.strAlcoholic,
          image: drink.strDrinkThumb,
          glass: drink.strGlass,
          ingredients,
          instructions: drink.strInstructions,
        };
      });
      return { drink };
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;
    await queryClient.ensureQueryData(getQueryCocktail(id));
    return { id };
  };
const Cocktail = () => {
  const { id } = useLoaderData() as {
    id: string;
  };

  const { data } = useQuery(getQueryCocktail(id));
  if (!data || !data?.drink) {
    return <Navigate to="/" />;
  }

  const { name, category, info, image, glass, ingredients, instructions } =
    data.drink[0];

  return (
    <Wrapper>
      <div className="cocktail-header">
        <h3>{name}</h3>
        <Link to={-1 as any} className="btn">
          back to home
        </Link>
      </div>
      <div className="cocktail-container">
        <div className="cocktail-img-container">
          <img src={image} alt={name} />
        </div>

        <div className="cocktail-info">
          <p>
            <span className="drink-info">Name: </span>
            {name}
          </p>
          <p>
            <span className="drink-info">Category: </span>
            {category}
          </p>
          <p>
            <span className="drink-info">Info: </span>
            {info}
          </p>
          <p>
            <span className="drink-info">Glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-info">Ingredients: </span>
            {ingredients?.map((ingredient, index) => {
              return (
                <span key={`${ingredient}${index}`}>
                  {ingredient}
                  {index < ingredients.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-info">Instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
      <Link to={-1 as any} className="btn">
        back to home
      </Link>
    </Wrapper>
  );
};
export default Cocktail;

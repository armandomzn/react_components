import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import { DrinkProps } from "../interfaces/DrinkProps";
import { DrinkApiProps } from "../interfaces/DrinkApiProps";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const getQueryCocktailList = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "tequila"],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailUrl}${searchTerm}`);
      if (!data.drinks) {
        return null;
      }
      const drinks: DrinkProps[] = data.drinks.map((drink: DrinkApiProps) => {
        return {
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          info: drink.strAlcoholic,
          image: drink.strDrinkThumb,
          glass: drink.strGlass,
        };
      });
      return { drinks };
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const newUrl = new URL(request.url);
    const searchTerm = newUrl.searchParams.get("search") || "";
    await queryClient.ensureQueryData(getQueryCocktailList(searchTerm));
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData() as {
    searchTerm: string;
  };
  const { data } = useQuery(getQueryCocktailList(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={data?.drinks} />
    </>
  );
};
export default Landing;

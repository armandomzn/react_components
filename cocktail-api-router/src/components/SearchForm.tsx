import { Form, useNavigation } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/SearchForm";

interface Props {
  searchTerm: string;
}

const SearchForm = ({ searchTerm }: Props) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="text"
          name="search"
          placeholder="e.x Margarita"
          defaultValue={searchTerm}
        />
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "searching" : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;

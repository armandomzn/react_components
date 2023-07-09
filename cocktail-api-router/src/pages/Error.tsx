import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/Error";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Wrapper>
          <h3>That page doesn't exist!</h3>
          <p>Sorry, the page you were looking for could not be found</p>
          <Link to="/">back home</Link>
        </Wrapper>
      );
    }
  }

  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  );
};
export default Error;

import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/Error";

const SingleErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <Wrapper>
      <p>{errorMessage}</p>
    </Wrapper>
  );
};
export default SingleErrorPage;

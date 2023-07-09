import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  height: 100vh;
  h3 {
    color: var(--primary-500);
    font-size: 4rem;
    letter-spacing: var(--letter-spacing);
  }
  p {
    font-size: 1.2rem;
    color: var(--grey-500);
  }
  a {
    text-transform: capitalize;
    color: var(--primary-700);
    letter-spacing: var(--letter-spacing);
    border-bottom: 1px solid var(--primary-700);
    transition: var(--transition);
    &:hover {
      color: var(--primary-400);
      border-color: var(--primary-400);
    }
  }
`;

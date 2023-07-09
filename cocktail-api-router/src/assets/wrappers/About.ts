import { styled } from "styled-components";

export const Wrapper = styled.article`
  background: var(--white);
  padding: 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  box-shadow: var(--shadow-2);
  max-width: var(--fixed-width);
  margin: 0 auto;
  h3 {
    font-size: 1.5rem;
    letter-spacing: var(--letter-spacing);
    color: var(--primary-500);
    font-weight: bold;
  }
  p {
    line-height: 2;
    color: var(--grey-600);
  }
  &:hover{
    box-shadow: var(--shadow-3);
  }
`;

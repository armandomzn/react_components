import { styled } from "styled-components";

export const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  &:hover {
    box-shadow: var(--shadow-4);
  }
  .cocktail-card-image {
    img {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      height: 15.6rem;
    }
  }
  .cocktail-card-info {
    padding: 1rem;
    h4 {
      font-size: 1rem;
      font-weight: bold;
      color: var(--primary-500);
      letter-spacing: var(--letter-spacing);
      margin-bottom: 1rem;
    }
    h5,
    p {
      color: var(--grey-500);
    }
    h5 {
      font-size: 1rem;
      margin-bottom: .5rem;
    }
    .btn{
      display: block;
      text-align: center;
      letter-spacing: 1px;
    }
  }
`;

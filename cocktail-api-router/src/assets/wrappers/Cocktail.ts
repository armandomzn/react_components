import { styled } from "styled-components";

export const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  &:hover {
    box-shadow: var(--shadow-3);
  }
  .btn {
    width: 100%;
    text-align: center;
  }
  .cocktail-header {
    .btn {
      display: none;
    }
  }

  h3 {
    font-weight: bold;
    color: var(--primary-500);
    text-align: center;
  }
  .cocktail-container {
    display: grid;
    row-gap: 1.5rem;
  }
  .cocktail-img-container {
    img {
      max-height: 30rem;
      border-radius: var(--border-radius);
    }
  }
  .cocktail-info {
    .drink-info {
      background: var(--primary-100);
      padding: 0.3rem 0.5rem;
      border-radius: var(--border-radius);
      margin-right: 0.5rem;
      color: var(--primary-600);
      font-weight: bold;
      letter-spacing: var(--letter-spacing);
    }
    color: var(--grey-600);
  }
  @media (min-width: 768px) {
    .btn {
      display: none;
    }
    .cocktail-container {
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
    }
    h3 {
      text-align: left;
    }
    .cocktail-header {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      .btn {
        align-self: self-start;
        justify-self: end;
        display: inline-block;
      }
    }
  }
`;

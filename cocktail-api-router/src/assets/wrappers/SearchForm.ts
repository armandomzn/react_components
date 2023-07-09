import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  border-radius: var(--border-radius);
  margin: 2rem auto 4rem auto;
  padding: 2rem;
  max-width: var(--fixed-width);
  /* width: 95%; */
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    input {
      padding: 0.5rem;
      border-radius: var(--border-radius);
      border-bottom-right-radius: 0;
      border-bottom-right-radius: 0;
      border: 1px solid var(--grey-300);
      background: var(--grey-50);
    }
    .btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  @media (max-width: 480px) {
    .form {
        width: 100%;
      grid-template-columns: minmax(0,1fr);
    }
  }
`;

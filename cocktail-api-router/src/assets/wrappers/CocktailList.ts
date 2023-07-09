import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 358px), 1fr));
`;

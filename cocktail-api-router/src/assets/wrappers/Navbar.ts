import { styled } from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  box-shadow: var(--shadow-2);
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    h2 {
      margin-bottom: 0;
      font-size: clamp(1rem, 2vw, 3rem);
      letter-spacing: var(--letter-spacing);
      color: var(--primary-700);
      font-weight: bold;
    }
    .nav-toggle {
      background: transparent;
      border: transparent;
      color: var(--primary-500);
      font-size: 1.5rem;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        transform: rotate(90deg) scale(0.8);
      }
    }
  }
  .nav-links {
    li {
      transition: var(--transition);
    }
    a {
      text-transform: capitalize;
      color: var(--grey-500);
      padding: 1rem;
      display: block;
      letter-spacing: var(--letter-spacing);
    }
  }
  .nav-links li:hover {
    padding-left: 1rem;
    color: var(--primary-700);
    background-color: var(--primary-100);
  }
  .nav-links {
    .active {
      color: var(--primary-500);
      /* font-weight: bold; */
    }
  }
  .links-container {
    overflow: hidden;
    transition: var(--transition);
  }
  @media (min-width: 768px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      width: 95%;
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      li {
        &:hover {
          a {
            color: var(--primary-400);
          }
        }
      }
    }
    .nav-links li:hover {
      padding-left: 0;
      background-color: var(--white);
    }
    .links-container {
      overflow: visible;
    }
  }
`;

export default Wrapper;

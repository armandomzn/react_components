import Wrapper from "../assets/wrappers/Navbar";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
const Navbar = () => {
  const navRefContainer = useRef<HTMLUListElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const navStyles = {
    height:
      isNavOpen && navRefContainer.current
        ? `${navRefContainer.current.getBoundingClientRect().height}px`
        : "0px",
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="logo">Cocktail Api</h2>
          <button
            className="nav-toggle"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        </div>
        <div
          style={windowSize < 768 ? navStyles : {}}
          className="links-container"
        >
          <ul ref={navRefContainer} className="nav-links">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

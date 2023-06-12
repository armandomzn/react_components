import { FaBars } from "react-icons/fa";
import { pageLinks, socialLinks } from "../Data";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const linkContainerRef = useRef<HTMLUListElement>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);
  const navStyles = {
    height:
      showLinks && linkContainerRef.current
        ? `${linkContainerRef.current.getBoundingClientRect().height}px`
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
  },[windowSize]);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h4 className="logo">
            armando<span>mzn</span>
          </h4>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks((prev) => !prev)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          style={windowSize < 800 ? navStyles : {}}
        >
          <ul className="page-links" ref={linkContainerRef}>
            {pageLinks.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-links">
          {socialLinks.map(({ id, icon, url }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

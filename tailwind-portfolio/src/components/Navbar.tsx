import { useRef, useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { navLinks } from "../data";
import { useAppContext } from "../context";

const Navbar = () => {
  const { toggleNavBar, isNavBarOpen, windowSize } = useAppContext();
  const linksContainer = useRef<HTMLDivElement>(null);
  const navContainer = useRef<HTMLElement>(null);
  const [currentHeight, setCurrentHeight] = useState(0);
  const navStyles = {
    height:
      isNavBarOpen && linksContainer.current
        ? `${linksContainer.current.getBoundingClientRect().height}px`
        : "0px",
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (!navContainer.current || !targetElement) {
      return;
    }
    if (isNavBarOpen) {
      toggleNavBar();
    }
    setTimeout(() => {
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        (navContainer.current?.getBoundingClientRect().height ?? 0);
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 300);
  };
  useEffect(() => {
    const getCurrentHeight = () => {
      const { scrollY } = window;
      setCurrentHeight(scrollY);
    };
    window.addEventListener("scroll", getCurrentHeight);
    return () => {
      window.removeEventListener("scroll", getCurrentHeight);
    };
  }, []);

  const navClasses =
    currentHeight > (navContainer.current?.getBoundingClientRect().height ?? 0)
      ? "sticky top-0 left-0 z-10 bg-white shadow-md transition-all duration-300"
      : "relative bg-sky-200 transition-all duration-300";

  return (
    <nav className={`${navClasses}`} ref={navContainer}>
      <div className=" md:h-24 max-w-6xl md:mx-auto md:w-11/12 md:flex md:items-center md:justify-between">
        <div className="flex justify-between p-4">
          <h2 className="font-bold capitalize tracking-wide text-sky-600 text-base sm:text-3xl">
            software<span className="text-sky-800">Dev</span>
          </h2>
          <button
            type="button"
            className="cursor-pointer md:hidden text-2xl transform hover:rotate-90 hover:text-sky-600 duration-200"
            onClick={toggleNavBar}
          >
            <FaBarsStaggered />
          </button>
        </div>
        <div
          style={windowSize < 768 ? navStyles : {}}
          className={`${
            isNavBarOpen
              ? `overflow-visible opacity-100 `
              : `overflow-hidden opacity-0`
          }  transition-all duration-300 ease-linear md:opacity-100 md:overflow-visible md:h-auto`}
        >
          <div
            className="flex flex-col gap-4 md:flex-row  md:h-auto"
            ref={linksContainer}
          >
            {navLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.id}
                  className="capitalize text-sky-800 tracking-wider hover:text-sky-100 md:hover:text-sky-500 hover:pl-6 hover:bg-sky-600 md:hover:bg-transparent duration-300 text-xl h-auto p-4 md:p-0 md:hover:pl-0"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

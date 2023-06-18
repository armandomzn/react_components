import { FaBars } from "react-icons/fa";
import { useAppContext } from "../Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { toggleSideBar, setPageId } = useAppContext();

  const handleSubMenuOver = (e: React.MouseEvent<EventTarget>) => {
    if (!(e.target as Element).classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubMenuOver}>
      <div className="nav-center">
        <h3 className="logo">strapi menu</h3>
        <button className="toggle-btn" type="button" onClick={toggleSideBar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;

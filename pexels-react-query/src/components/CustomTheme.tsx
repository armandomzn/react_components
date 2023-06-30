import { BiSun, BiMoon } from "react-icons/bi";
import { useAppContext } from "../context";
const CustomTheme = () => {
  const { toggleDarkMode, isDarkMode } = useAppContext();
  return (
    <nav className="navbar">
      <button onClick={toggleDarkMode} className="toggle-button">
        {isDarkMode ? (
          <BiMoon className="toggle-icon white-color moon" />
        ) : (
          <BiSun className="toggle-icon" />
        )}
      </button>
    </nav>
  );
};
export default CustomTheme;

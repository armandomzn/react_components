import { FaTimes } from "react-icons/fa";
import { pageLinks, socialLinks } from "../data";
import { useAppContext } from "../context";

const Sidebar = () => {
  const { isSideBarOpen, toggleSideBar } = useAppContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <h2 className="logo">
          armando<span>mzn</span>
        </h2>
        <button className="close-btn" type="button" onClick={toggleSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="page-links">
        {pageLinks.map(({ id, icon, text, url }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {socialLinks.map(({ id, icon, url }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

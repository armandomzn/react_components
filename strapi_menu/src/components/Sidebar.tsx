import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../Context";
import { pageLinks } from "../data";

const Sidebar = () => {
  const { isSideBarOpen, toggleSideBar } = useAppContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={toggleSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {pageLinks.map(({ pageId, pageName, links }) => {
            return (
              <article key={pageId}>
                <h4>{pageName}</h4>
                <ul className="sidebar-sublinks">
                  {links.map(({ id, icon, label, url }) => {
                    return (
                      <li key={id}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

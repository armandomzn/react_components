import { useAppContext } from "../Context";
import { pageLinks } from "../data";

const NavLinks = () => {
  const { setPageId } = useAppContext();
  return (
    <ul className="nav-links">
      {pageLinks.map(({ pageName, pageId }) => {
        return (
          <li key={pageId}>
            <button
              type="button"
              onMouseEnter={() => setPageId(pageId)}
              className="nav-link"
            >
              {pageName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;

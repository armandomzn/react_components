import { useRef } from "react";
import { useAppContext } from "../Context";
import { pageLinks } from "../data";

const SubMenu = () => {
  const { pageId, setPageId } = useAppContext();
  const currentPage = pageLinks.find((link) => {
    return link.pageId === pageId;
  });
  const subMenuContainer = useRef<null | HTMLDivElement>(null);

  const handleSubMenuOut = (e: React.MouseEvent<EventTarget>) => {
    if (!subMenuContainer.current) {
      return;
    }
    // we get the x and y coordinates of the container when it leaves the container
    const { clientX, clientY } = e;
    // we obtain the x, y and bottom coordinates of the container that will be used to calculate when the cursor is outside the container and thus remove the submenu.
    const { left, right, bottom } =
      subMenuContainer.current.getBoundingClientRect();
    if (clientX <= left - 1 || clientX >= right || clientY >= bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      ref={subMenuContainer}
      onMouseLeave={handleSubMenuOut}
    >
      <h5>{currentPage?.pageName}</h5>
      <div className="submenu-links">
        <ul
          style={{
            gridTemplateColumns: `${
              currentPage && currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr"
            }`,
          }}
        >
          {currentPage?.links.map(({ id, label, icon, url }) => {
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
      </div>
    </div>
  );
};

export default SubMenu;

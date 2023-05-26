import { MenuProps } from "../interfaces/MenuProps";
import MenuItem from "./MenuItem";

interface Props {
  items: MenuProps[];
}

const Menu = ({ items }: Props) => {
  return (
    <div className="menu-section">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} item={menuItem} />;
      })}
    </div>
  );
};

export default Menu;

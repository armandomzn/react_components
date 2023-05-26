import { MenuProps } from "../interfaces/MenuProps";

interface Props {
  item: MenuProps;
}

const MenuItem = ({ item: { desc, title, img, price } }: Props) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo-menu" />
      <div className="menu-info">
        <header>
          <h5>{title}</h5>
          <span className="menu-price">${price.toFixed(2)}</span>
        </header>
        <p className="menu-description">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;

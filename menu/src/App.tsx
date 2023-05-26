import { useState } from "react";
import Title from "./components/Title";
import { data } from "./data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import { MenuProps } from "./interfaces/MenuProps";

const tempMenu = data.map((menuItem) => {
  return menuItem.category;
});
const allCategories = ["all", ...new Set([...tempMenu])];

function App() {
  const [categories, _] = useState<string[]>(allCategories);
  const [menu, setMenu] = useState<MenuProps[]>(data);
  const filterCategory = (category: string) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems: MenuProps[] = data.filter((menuItems) => {
      return menuItems.category === category;
    });
    setMenu(newItems);
  };
  return (
    <main className="main">
      <Title title="our menu" />
      <section className="section-center">
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;

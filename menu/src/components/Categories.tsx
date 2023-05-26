import Category from "./Category";

interface Props {
  categories: string[];
  filterCategory: (category: string) => void;
}
const Categories = ({ categories, filterCategory }: Props) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <Category
            key={category}
            category={category}
            filterCategory={filterCategory}
          />
        );
      })}
    </div>
  );
};

export default Categories;

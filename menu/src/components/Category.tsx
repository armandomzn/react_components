interface Props {
  category: string;
  filterCategory: (category: string) => void;
}

const Category = ({ category, filterCategory }: Props) => {
  return (
    <button
      type="button"
      className="btn filter-btn"
      onClick={() => filterCategory(category)}
    >
      {category}
    </button>
  );
};

export default Category;

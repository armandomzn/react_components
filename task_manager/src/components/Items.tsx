import { ItemProps } from "../interfaces/ItemProps";
import SingleItem from "./SingleItem";

interface Props {
  items: ItemProps[];
  deleteItem: (id: string) => void;
  updateTask: (id: string) => void;
  editItem: (id: string) => void;
}

const Items = ({ items, deleteItem, updateTask, editItem }: Props) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateTask={updateTask}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;

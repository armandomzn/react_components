import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { ItemProps } from "../interfaces/ItemProps";

interface Props {
  item: ItemProps;
  deleteItem: (id: string) => void;
  updateTask: (id: string) => void;
  editItem: (id: string) => void;
}

const SingleItem = ({ item, deleteItem, updateTask, editItem }: Props) => {
  return (
    <article className="item">
      <input type="checkbox" onChange={() => updateTask(item.id)} />
      <p
        style={{
          textDecoration: `${item.completed ? "line-through" : "none"}`,
        }}
      >
        {item.name}
      </p>
      <div className="btn-container">
        <span
          className="edit-btn"
          onClick={() => {
            editItem(item.id);
          }}
        >
          <TbEdit />
        </span>
        <span className="delete-btn" onClick={() => deleteItem(item.id)}>
          <AiFillDelete />
        </span>
      </div>
    </article>
  );
};

export default SingleItem;

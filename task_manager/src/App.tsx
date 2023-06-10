import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Items from "./components/Items";
import { ItemProps } from "./interfaces/ItemProps";

const getLocalStorage = (): ItemProps[] => {
  const storeValues = localStorage.getItem("tasks");
  return storeValues ? JSON.parse(storeValues) : [];
};

const setLocalStorage = (items: ItemProps[]) => {
  localStorage.setItem("tasks", JSON.stringify(items));
};

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState<ItemProps[]>(getLocalStorage);
  const [editId, setEditId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const addItem = (value: string) => {
    const task = { id: nanoid(), completed: false, name: value };
    const newItems = [...items, task];
    setItems(newItems);
    setTask("");
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const deleteItem = (id: string) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
    setTask("");
    setEditId(null);
    setIsEditing(false);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const updateTask = (id: string) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const editItem = (id: string) => {
    const item = items.find((item) => {
      return item.id === id;
    });
    if (!item) {
      return;
    } else if (item.id !== editId && isEditing) {
    } else if (isEditing) {
      setIsEditing(false);
      setEditId(null);
      setTask("");
      return;
    }
    setEditId(item.id);
    setIsEditing(true);
    setTask(item.name);
  };

  const editItemForm = (value: string) => {
    const newItems = items.map((item) => {
      if (item.id === editId) {
        return {
          ...item,
          name: value,
        };
      }
      return item;
    });
    setItems(newItems);
    setEditId(null);
    setIsEditing(false);
    setTask("");
    setLocalStorage(newItems);
    toast.info("item updated");
  };

  const emptyItems = () => {
    setItems([]);
    setEditId(null);
    setIsEditing(false);
    setTask("");
    setLocalStorage([]);
    toast.success("items cleaned successfully");
  };

  return (
    <main className="main">
      <section className="section">
        <h2>task manager</h2>
        <Form
          task={task}
          addItem={addItem}
          setTask={setTask}
          isEditing={isEditing}
          editItemForm={editItemForm}
        />
        <Items
          items={items}
          deleteItem={deleteItem}
          updateTask={updateTask}
          editItem={editItem}
        />
        {items.length > 0 && (
          <button
            type="button"
            className="btn btn-clear-items"
            onClick={emptyItems}
          >
            clear all
          </button>
        )}
    
      </section>
      <ToastContainer position="bottom-right" />
    </main>
  );
}

export default App;

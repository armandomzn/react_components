import { FormEvent } from "react";
import { toast } from "react-toastify";

interface Props {
  task: string;
  addItem: (value: string) => void;
  setTask: (value: string) => void;
  editItemForm: (value: string) => void;
  isEditing: boolean;
}

const Form = ({ task, addItem, setTask, isEditing, editItemForm }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) {
      toast.error("please provide task name");
      return;
    } else if (task && isEditing) {
      editItemForm(task);
      return;
    }
    addItem(task);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={task}
        className="form-input"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn form-btn">
        {isEditing ? "edit item" : "add item"}
      </button>
    </form>
  );
};

export default Form;

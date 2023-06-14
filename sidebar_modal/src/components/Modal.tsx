import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context";
const Modal = () => {
  const { isModalOpen, toggleModal } = useAppContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <div className="modal-header">
          <h4>modal title</h4>
          <button type="button" className="close-btn" onClick={toggleModal}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-content">
          <p>modal content</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  return (
    <div className={isOpen ? "modal-container show-modal" : "modal-container"}>
      <div className="modal">
        <div className="modal-content">
          <h4>remove all items from your shopping card?</h4>
          <div className="modal-btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn cancel-btn"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

import { createPortal } from "react-dom";
import styles from "../component_css/Modal.module.css";

function Modal({ children, setIsModalOpen }) {
  return createPortal(
    <>
      <div
        className={styles.backdrop}
        onClick={() => {
          setIsModalOpen(false);
        }}
      ></div>
      <div className={styles.container}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;

import styles from "../component_css/CartItem.module.css";
import { useCartContext } from "../context/CartProvider";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CartItem = ({ id, title, img, price, quantity }) => {
  const { cartData, removeItem, increaseQuant, decreaseQuant } =
    useCartContext();

  return (
    <div className={styles.CartItem}>
      <img src={img} className={styles.img} alt={title} />
      <p className={styles.title}>{title}</p>
      <div className={styles.quantityContainer}>
        <button
          onClick={() => {
            decreaseQuant(id);
          }}
        >
          <FaMinus />
        </button>
        <h3>{quantity}</h3>
        <button
          onClick={() => {
            increaseQuant(id);
          }}
        >
          <FaPlus />
        </button>
      </div>
      <p className={styles.price}>Price: ₹{price * quantity}</p>
      <button
        onClick={() => {
          removeItem(id);
        }}
      >
        <MdDelete className={styles.deleteIcon} />
      </button>{" "}
    </div>
  );
};

export default CartItem;

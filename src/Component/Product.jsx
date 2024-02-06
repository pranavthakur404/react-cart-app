import styles from "../component_css/Product.module.css";
import { useCartContext } from "../context/CartProvider";
import { toast } from "react-toastify";

function Product({ id, img, title, price }) {
  const { addItem, cartData } = useCartContext();

  function handleClick() {
    let check = true;
    cartData.forEach((data) => {
      if (id == data.id) {
        toast.error("Item Already Added", {
          position: "bottom-right",
          autoClose: 3000,
        });
        check = false;
      }
    });
    if (check) {
      const newObj = {
        id: id,
        img: img,
        title: title,
        price: price,
        quantity: 1,
      };
      addItem(newObj);
      toast.success("Item Added.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  }

  return (
    <div className={styles.product}>
      <img src={img} alt={title} height={200} />
      <div className={styles.details}>
        <p className={styles.price}>₹ {price}</p>
        <p className={styles.title}>{title}</p>
        <button className={styles.button} onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

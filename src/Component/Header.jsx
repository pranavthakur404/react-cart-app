import React, { useEffect, useState } from "react";
import styles from "../component_css/Header.module.css";
import Modal from "./Modal";
import { useCartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const { cartData } = useCartContext();

  let totalCartItem = 0;
  cartData.forEach((data) => {
    totalCartItem += data.quantity;
  });

  let totalAmout = cartData.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.querySelector("body").classList.add("hide");
    } else {
      document.querySelector("body").classList.remove("hide");
    }
  }, [isModalOpen]);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>ARC Desktop</h1>
        <button
          className={styles.cartButton}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <span className={styles.cartIconContainer}>
            <FaCartShopping className={styles.icon} />
            {totalCartItem > 0 && (
              <span className={styles.cartNumber}>{totalCartItem}</span>
            )}
          </span>
          Cart
        </button>
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          {cartData.length == 0 ? (
            <h2>No Items Found...!!</h2>
          ) : (
            cartData.map((data) => {
              return <CartItem key={data.id} {...data} />;
            })
          )}
          {cartData.length > 0 && <h3>Total : ₹{totalAmout}</h3>}
        </Modal>
      )}
    </div>
  );
}

export default Header;

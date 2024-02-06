import Product from "./Product";
import { data } from "../data/Product";
import styles from "../component_css/Products.module.css";

function Products() {
  return (
    <div className={styles.products}>
      {data.map((d) => {
        return <Product key={d.id} {...d} />;
      })}
    </div>
  );
}

export default Products;

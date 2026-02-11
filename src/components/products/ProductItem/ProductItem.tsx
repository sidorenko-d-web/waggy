import { products } from "../../../assets/data";
import styles from "./ProductItem.module.scss";

export function ProductItem({
  item,
  setCart,
}: {
  item: (typeof products)[0];
  setCart: (arg: { id: number }) => void;
}) {
  return (
    <div className={styles.wrapper}>
      {item?.extra && <div className={styles.extra}>{item.extra}</div>}
      <img
        className={styles.img}
        src={"img/product" + item.id + ".png"}
        alt={item.title}
      />
      <h4 className={styles.title}>{item.title}</h4>
      <div className={styles.rating}>
        <img src="img/star.svg" alt="star" />
        <p>{item.rating}</p>
      </div>
      <p className={styles.price}>{item.price}</p>
      <div className={styles.buttons}>
        <button
          onClick={() => setCart({ id: item!.id })}
          className={styles.addBtn}
        >
          Add to cart
        </button>
        <button className={styles.like}>
          <img src="img/heart.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

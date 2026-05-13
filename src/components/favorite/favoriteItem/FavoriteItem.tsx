import clsx from "clsx";
import type { products } from "../../../assets/data";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../../types/types";
import { Button } from "../../button/Button";
import styles from "./FavoriteItem.module.scss";

function FavoriteItem({
  item,
  cart,
  handleSetCart,
}: {
  item: (typeof products)[0];
  cart?: TypeLocalStorageItem[];
  handleSetCart: TypeSetLocalStorageItem;
}) {
  const isAdded = cart?.some((_item) => _item.id === item.id);

  const handleAdd = () => {
    isAdded
      ? handleSetCart(cart?.filter((_item) => _item.id !== item.id) ?? [])
      : handleSetCart([...(cart ?? []), { id: item.id }]);
  };

  return (
    <div className={styles.wrapper}>
      {item?.extra && <div className={styles.extra}>{item.extra}</div>}

      <div className={styles.heart}>
        <img src="img/heartYellow.svg" alt="heartYellow" />
      </div>

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
        <Button
          onClick={handleAdd}
          className={clsx(styles.button, isAdded && styles.added)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default FavoriteItem;

import clsx from "clsx";
import { products } from "../../../assets/data";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../../types/types";
import styles from "./ProductItem.module.scss";

export function ProductItem({
  item,
  setCart,
  handleSetFavorites,
  favorites,
}: {
  item: (typeof products)[0];
  setCart: (arg: { id: number }) => void;
  favorites?: TypeLocalStorageItem[];
  handleSetFavorites: TypeSetLocalStorageItem;
}) {
  const isLiked = favorites?.some((_item) => _item.id === item.id);
  const handleLike = () => {
    isLiked
      ? handleSetFavorites(
          favorites?.filter((_item) => _item.id !== item.id) ?? [],
        )
      : handleSetFavorites([...(favorites ?? []), { id: item.id }]);
  };
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
        <button onClick={handleLike} className={clsx(isLiked && styles.liked)}>
          <img src="img/heart.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

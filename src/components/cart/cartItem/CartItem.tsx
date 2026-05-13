import clsx from "clsx";
import { products } from "../../../assets/data";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../../types/types";
import styles from "./CartItem.module.scss";

export function CartItem({
  item,
  favorites,
  handleSetSelectedCart,
  cart,
  handleSetCart,
  selectCart,
  handleSetFavorites,
}: {
  item: (typeof products)[0];
  favorites?: TypeLocalStorageItem[];
  handleSetFavorites: TypeSetLocalStorageItem;
  cart?: TypeLocalStorageItem[];
  handleSetCart: TypeSetLocalStorageItem;
  selectCart?: TypeLocalStorageItem[];
  handleSetSelectedCart: TypeSetLocalStorageItem;
}) {
  const items = cart?.filter((_item) => item.id === _item.id);
  const number = items?.length ?? 0;

  const handleAdd = () => {
    if (!cart) return;
    if (!items) return;
    handleSetCart([...cart, { id: item.id }]);
  };

  const handleRemove = () => {
    if (!cart) return;
    if (!items) return;
    const index = cart.findIndex((_item) => _item.id === item.id);
    const newValue = [...cart];
    newValue.splice(index, 1);

    handleSetCart(newValue);
  };

  const isSelected = selectCart?.some((_item) => _item.id === item.id);
  const handleSelect = () => {
    if (isSelected) {
      if (!selectCart) return;
      handleSetSelectedCart(selectCart.filter((_item) => _item.id !== item.id));
    } else handleSetSelectedCart([...(selectCart ?? []), { id: item.id }]);
  };

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
      <div className={styles.checkbox}>
        <label htmlFor={"check" + item.id}>
          {isSelected ? (
            <img src="img/checkSelected.svg" alt="check" />
          ) : (
            <img src="img/check.svg" alt="check" />
          )}
        </label>
        <input
          onChange={handleSelect}
          type="checkbox"
          name={"check" + item.id}
          id={"check" + item.id}
        />
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
        <button className={styles.minus} onClick={handleRemove}>
          <img src="img/minus.svg" alt="minus" />
        </button>
        <button className={styles.number}>{number}</button>
        <button className={styles.plus} onClick={handleAdd}>
          <img src="img/plus.svg" alt="plus" />
        </button>
        <button
          onClick={handleLike}
          className={clsx(styles.like, isLiked && styles.liked)}
        >
          <img src="img/heart.svg" alt="heart" />
        </button>
      </div>
    </div>
  );
}

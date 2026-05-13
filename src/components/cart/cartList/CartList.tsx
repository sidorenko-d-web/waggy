import { products } from "../../../assets/data";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../../types/types";
import { CartItem } from "../cartItem/CartItem";
import styles from "./CartList.module.scss";

export function CartList({
  favorites,
  handleSetFavorites,
  cart,
  handleSetCart,
  selectCart,
  handleSetSelectedCart,
}: {
  favorites?: TypeLocalStorageItem[];
  handleSetFavorites: TypeSetLocalStorageItem;
  cart?: TypeLocalStorageItem[];
  handleSetCart: TypeSetLocalStorageItem;
  selectCart?: TypeLocalStorageItem[];
  handleSetSelectedCart: TypeSetLocalStorageItem;
}) {
  const items = products.filter((item) =>
    cart?.some((_item) => _item.id === item.id),
  );
  return (
    <div className={styles.wrapper}>
      {items?.map((value) => (
        <CartItem
          item={value}
          key={value.id}
          favorites={favorites}
          handleSetFavorites={handleSetFavorites}
          cart={cart}
          handleSetCart={handleSetCart}
          selectCart={selectCart}
          handleSetSelectedCart={handleSetSelectedCart}
        />
      ))}
    </div>
  );
}

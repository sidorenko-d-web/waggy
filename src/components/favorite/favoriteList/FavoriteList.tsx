import { products } from "../../../assets/data";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../../types/types";
import FavoriteItem from "../favoriteItem/FavoriteItem";
import styles from "./FavoriteList.module.scss";

function FavoriteList({
  favorites,
  cart,
  handleSetCart,
}: {
  favorites?: TypeLocalStorageItem[];
  cart?: TypeLocalStorageItem[];
  handleSetCart: TypeSetLocalStorageItem;
}) {
  const items = products.filter((item) =>
    favorites?.some((_item) => _item.id === item.id),
  );
  return (
    <div className={styles.wrapper}>
      {items?.map((value) => (
        <FavoriteItem
          item={value}
          key={value.id}
          cart={cart}
          handleSetCart={handleSetCart}
        />
      ))}
    </div>
  );
}

export default FavoriteList;

import CartHeader from "../components/cart/cartHeader/CartHeader";
import { CartList } from "../components/cart/cartList/CartList";
import EmptyScreen from "../components/cart/emptyScreen/EmptyScreen";
import Total from "../components/cart/total/Total";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../types/types";

export function CartPage({
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
  return (
    <main>
      <CartHeader
        cart={cart}
        handleSetCart={handleSetCart}
        selectCart={selectCart}
        handleSetSelectedCart={handleSetSelectedCart}
      />
      {!cart?.length && <EmptyScreen mode="cart" />}
      <CartList
        favorites={favorites}
        handleSetFavorites={handleSetFavorites}
        cart={cart}
        handleSetCart={handleSetCart}
        selectCart={selectCart}
        handleSetSelectedCart={handleSetSelectedCart}
      />
      <Total cart={cart} />
    </main>
  );
}

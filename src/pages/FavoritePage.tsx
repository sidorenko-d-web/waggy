import EmptyScreen from "../components/cart/emptyScreen/EmptyScreen";
import FavoriteHeader from "../components/favorite/favoriteHeader/FavoriteHeader";
import FavoriteList from "../components/favorite/favoriteList/FavoriteList";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../types/types";

export function FavoritePage({
  favorites,
  handleSetFavorites,
  cart,
  handleSetCart,
}: {
  favorites?: TypeLocalStorageItem[];
  handleSetFavorites: TypeSetLocalStorageItem;
  cart?: TypeLocalStorageItem[];
  handleSetCart: TypeSetLocalStorageItem;
}) {
  return (
    <main>
      <FavoriteHeader handleSetFavorites={handleSetFavorites} />
      {!favorites?.length && <EmptyScreen mode="favorites" />}
      <FavoriteList
        favorites={favorites}
        cart={cart}
        handleSetCart={handleSetCart}
      />
    </main>
  );
}

import { GallerySection } from "../components/gallery/GallerySection";
import { HeroSection } from "../components/hero/HeroSection";
import { OfferSection } from "../components/offer/OfferSection";
import { ProductsSection } from "../components/products/ProductSection";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../types/types";

export function MainPage({
  setCart,
  search,
  handleSetFavorites,
  favorites,
}: {
  setCart: (arg: TypeLocalStorageItem) => void;
  search: string;
  favorites?: TypeLocalStorageItem[];
  handleSetFavorites: TypeSetLocalStorageItem;
}) {
  return (
    <main className="main">
      {!search && <HeroSection />}
      <ProductsSection
        handleSetFavorites={handleSetFavorites}
        favorites={favorites}
        setCart={setCart}
        search={search}
      />
      <OfferSection />
      <GallerySection />
    </main>
  );
}

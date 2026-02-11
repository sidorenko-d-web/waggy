import { GallerySection } from "../components/gallery/GallerySection";
import { HeroSection } from "../components/hero/HeroSection";
import { OfferSection } from "../components/offer/OfferSection";
import { ProductsSection } from "../components/products/ProductSection";

export function MainPage({
  setCart,
  search,
}: {
  setCart: (arg: { id: number }) => void;
  search: string;
}) {
  return (
    <main className="main">
      {!search && <HeroSection />}
      <ProductsSection setCart={setCart} search={search} />
      <OfferSection />
      <GallerySection />
    </main>
  );
}

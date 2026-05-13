import { useState } from "react";
import styles from "./ProductSection.module.scss";
import clsx from "clsx";
import { Button } from "../button/Button";
import { products } from "../../assets/data";
import { ProductItem } from "./ProductItem/ProductItem";
import type {
  TypeLocalStorageItem,
  TypeSetLocalStorageItem,
} from "../../types/types";

type filter = "all" | "cat" | "dog" | "bird";
const filters: filter[] = ["all", "cat", "dog", "bird"];

export function ProductsSection({
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
  const [filter, setFilter] = useState<filter>(filters[0]);

  const data = products
    .filter((item) => item.title.includes(search))
    .filter((item) => (filter === "all" ? true : item.category === filter));
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.products__top}>
          <h3 className={styles.heading}>Products</h3>
          <div className={styles.filter_buttons}>
            {filters.map((item) => {
              const handleSelect = () => setFilter(item);
              return (
                <button
                  key={item}
                  className={clsx(
                    styles.heading_button,
                    filter === item && styles.selected,
                  )}
                  onClick={handleSelect}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <Button>shop all →</Button>
        </div>
        <div className={styles.products__catalog}>
          {data.map((item, index) => (
            <ProductItem
              setCart={setCart}
              item={item}
              key={index}
              handleSetFavorites={handleSetFavorites}
              favorites={favorites}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

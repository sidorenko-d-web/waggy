import clsx from "clsx";
import styles from "./Header.module.scss";
import type { Dispatch, SetStateAction } from "react";

const buttons = ["", "page", "shop", "blog", "contact", "offers"];

export function Header({
  cart,
  search,
  setSearch,
}: {
  cart: { id: number }[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const location = window.location.pathname.replace("/", "");

  return (
    <header className={styles.header}>
      <div className={clsx(styles.container, styles.info)}>
        <div className={styles.header__top}>
          <a href="/" className={styles.header__logo}>
            <img src="img/logo.svg" alt="logo" />
          </a>
          <div className={styles.header__search}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className={styles.input_search}
              placeholder="Search for more than 10,000 products"
            />
            <button className={styles.loupe}>
              <img src="img/loupe.svg" alt="" />
            </button>
          </div>
          <div className={styles.header__phone}>
            <p className={styles.info_title}>Phone</p>
            <p>+98034984089</p>
          </div>
          <div className={styles.header__email}>
            <p className={styles.info_title}>Email</p>
            <p>waggy@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={clsx(styles.container, styles.header__menu)}>
          <nav>
            <ul className={styles.menu_link}>
              {buttons.map((item) => {
                return (
                  <li
                    key={item}
                    className={clsx(
                      styles.headerButton,
                      item === location && styles.active,
                    )}
                  >
                    <a href={"/" + item}>{!!item ? item : "Home"}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.menu_icon}>
            <img src="img/account.svg" alt="account" />
            <a className={styles.cart} href="./favorites">
              {location === 'favorites' ? <img src="img/heartYellow.svg" alt="heart" /> : <img src="img/heart.svg" alt="heart" />}
            </a>
            <a className={styles.cart} href="./cart">
              <img src="img/cart.svg" alt="cart" />
              {!!cart?.length && (
                <div className={styles.number}>{cart?.length}</div>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

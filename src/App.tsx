import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CartPage } from "./pages/CartPage";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import { useLocalStorage } from "./hooks/useLocalstorage";
import { useState } from "react";
import "./index.css";
import { FavoritePage } from "./pages/FavoritePage";

function App() {
  const { value: cart, handleSetValue: handleSetCart } =
    useLocalStorage<{ id: number }[]>("cart");

  const { value: selectCart, handleSetValue: handleSetSelectedCart } =
    useLocalStorage<{ id: number }[]>("selectCart");

  const { value: favorites, handleSetValue: handleSetFavorites } =
    useLocalStorage<{ id: number }[]>("favorites");

  const setCart = (item: { id: number }) =>
    handleSetCart([...(cart ?? []), item]);

  const [search, setSearch] = useState("");

  return (
    <>
      <Header cart={cart ?? []} setSearch={setSearch} search={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                setCart={setCart}
                search={search}
                favorites={favorites}
                handleSetFavorites={handleSetFavorites}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                favorites={favorites}
                handleSetFavorites={handleSetFavorites}
                cart={cart}
                handleSetCart={handleSetCart}
                selectCart={selectCart}
                handleSetSelectedCart={handleSetSelectedCart}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritePage
                favorites={favorites}
                handleSetFavorites={handleSetFavorites}
                cart={cart}
                handleSetCart={handleSetCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

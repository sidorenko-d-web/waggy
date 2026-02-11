import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CartPage } from "./pages/CartPage";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";
import { useLocalStorage } from "./hooks/useLocalstorage";
import { useState } from "react";

function App() {
  const { value: cart, handleSetValue } =
    useLocalStorage<{ id: number }[]>("cart");
  const setCart = (item: { id: number }) =>
    handleSetValue([...(cart ?? []), item]);

  const [search, setSearch] = useState("");

  return (
    <>
      <Header cart={cart ?? []} setSearch={setSearch} search={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage setCart={setCart} search={search} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

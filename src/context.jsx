import React, { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext(null);
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("nova-lang") || "en");
  const [wishlist, setWishlist] = useState([]);
  const addToCart = (product, qty = 1) =>
    setCart((c) => {
      const found = c.find((x) => x.id === product.id);
      return found
        ? c.map((x) => (x.id === product.id ? { ...x, qty: x.qty + qty } : x))
        : [...c, { ...product, qty }];
    });
  const updateQty = (id, qty) =>
    setCart((c) =>
      qty < 1
        ? c.filter((x) => x.id !== id)
        : c.map((x) => (x.id === id ? { ...x, qty } : x)),
    );
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const toggleWish = (id) =>
    setWishlist((w) =>
      w.includes(id) ? w.filter((x) => x !== id) : [...w, id],
    );
  const setLanguage = (l) => {
    setLang(l);
    localStorage.setItem("nova-lang", l);
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = l;
  };
  useMemo(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        total,
        lang,
        setLanguage,
        wishlist,
        toggleWish,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
export const useStore = () => useContext(StoreContext);

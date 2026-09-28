import React from "react";
import { products } from "../data/products";
import { useStore } from "../context";
import ProductGrid from "../components/ProductGrid";
export default function NewArrivals() {
  const { lang } = useStore();
  const t = lang === "ar";
  return (
    <main className="container-x py-12">
      <div className="max-w-2xl mb-10">
        <div className="text-brand-600 text-xs font-bold uppercase tracking-[.18em]">
          {t ? "وصل حديثاً" : "Just landed"}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
          {t ? "أحدث المنتجات" : "New arrivals"}
        </h1>
        <p className="text-slate-500 mt-4">
          {t
            ? "اكتشف أحدث الإضافات إلى متجرنا."
            : "Discover the latest additions to our store."}
        </p>
      </div>
      <ProductGrid products={products.filter((p) => p.new)} />
    </main>
  );
}

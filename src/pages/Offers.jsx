import React from "react";
import { products } from "../data/products";
import { useStore } from "../context";
import ProductGrid from "../components/ProductGrid";
export default function Offers() {
  const { lang } = useStore();
  const t = lang === "ar";
  return (
    <main className="container-x py-12">
      <div className="rounded-3xl bg-[#063c2c] text-white p-8 md:p-14 mb-12">
        <div className="max-w-2xl">
          <div className="text-emerald-300 text-xs font-bold uppercase tracking-[.18em]">
            {t ? "لفترة محدودة" : "Limited time"}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3">
            {t ? "عروض تستحق الاكتشاف" : "Offers worth discovering."}
          </h1>
          <p className="text-white/60 mt-4">
            {t
              ? "منتجات مختارة بأسعار مميزة."
              : "Selected everyday products at special prices."}
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-extrabold mb-7">
        {t ? "كل العروض" : "All offers"}
      </h2>
      <ProductGrid products={products.filter((p) => p.offer)} />
    </main>
  );
}

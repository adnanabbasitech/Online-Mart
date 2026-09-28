import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "../data/products";
import { useStore } from "../context";
import ProductGrid from "../components/ProductGrid";
export default function Shop() {
  const { lang } = useStore();
  const t = lang === "ar";
  const [params] = useSearchParams();
  const initial = params.get("category") || "All";
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initial);
  const [sort, setSort] = useState("featured");
  const [max, setMax] = useState(50);
  const list = useMemo(() => {
    let a = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        p.price <= max &&
        (p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.nameAr.includes(q)),
    );
    if (sort === "low") a.sort((x, y) => x.price - y.price);
    if (sort === "high") a.sort((x, y) => y.price - x.price);
    if (sort === "rating") a.sort((x, y) => y.rating - x.rating);
    return a;
  }, [q, cat, sort, max]);
  return (
    <main className="container-x py-12">
      <div className="mb-10">
        <div className="text-brand-600 text-xs font-extrabold tracking-[.18em] uppercase">
          {t ? "المتجر" : "The store"}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
          {t ? "كل المنتجات" : "All products"}
        </h1>
        <p className="text-slate-500 mt-3">
          {t
            ? "اكتشف أكثر من 100 منتج بأسعار من 5 إلى 50 ريال."
            : "Explore 100+ products priced from 5 to 50 SAR."}
        </p>
      </div>
      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="bg-white rounded-2xl border border-slate-100 p-5 h-fit lg:sticky lg:top-28">
          <div className="flex items-center justify-between mb-5">
            <b>{t ? "الفلاتر" : "Filters"}</b>
            <button
              onClick={() => {
                setCat("All");
                setMax(50);
                setQ("");
              }}
              className="text-xs text-brand-600"
            >
              {t ? "مسح" : "Clear"}
            </button>
          </div>
          <label className="text-xs font-bold text-slate-500">
            {t ? "التصنيف" : "Category"}
          </label>
          <div className="grid gap-1 mt-2">
            {[
              ["All", t ? "الكل" : "All"],
              ...categories.map((c) => [c.name, t ? c.nameAr : c.name]),
            ].map(([v, l]) => (
              <button
                key={v}
                onClick={() => setCat(v)}
                className={`text-start px-3 py-2.5 rounded-xl text-sm ${cat === v ? "bg-brand-50 text-brand-700 font-bold" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <label className="text-xs font-bold text-slate-500 block mt-6">
            {t ? "أقصى سعر" : "Maximum price"}: {max} SAR
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={max}
            onChange={(e) => setMax(+e.target.value)}
            className="w-full mt-3 accent-[#15966b]"
          />
        </aside>
        <section>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search
                className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t ? "ابحث عن منتج..." : "Search products..."}
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 ps-11 pe-4 outline-none focus:border-brand-500"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none"
            >
              <option value="featured">{t ? "مميز" : "Featured"}</option>
              <option value="low">
                {t ? "السعر: الأقل" : "Price: low to high"}
              </option>
              <option value="high">
                {t ? "السعر: الأعلى" : "Price: high to low"}
              </option>
              <option value="rating">
                {t ? "الأعلى تقييماً" : "Top rated"}
              </option>
            </select>
          </div>
          <div className="text-xs text-slate-400 mb-5">
            {list.length} {t ? "منتج" : "products"}
          </div>
          {list.length ? (
            <ProductGrid products={list} />
          ) : (
            <div className="py-20 text-center bg-white rounded-2xl">
              No products found.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

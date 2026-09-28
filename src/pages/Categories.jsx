import React from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";
import { useStore } from "../context";
export default function Categories() {
  const { lang } = useStore();
  const t = lang === "ar";
  return (
    <main className="container-x py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-brand-600 text-xs font-bold uppercase tracking-[.18em]">
          {t ? "تسوق بذكاء" : "Shop smarter"}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
          {t ? "التصنيفات" : "Categories"}
        </h1>
        <p className="text-slate-500 mt-4">
          {t
            ? "تصفح مجموعاتنا المختارة وابحث عن احتياجاتك اليومية."
            : "Browse curated collections and find your everyday essentials."}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c, i) => (
          <Link
            to={`/shop?category=${encodeURIComponent(c.name)}`}
            key={c.name}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-100"
          >
            <div className="aspect-[1.1] overflow-hidden">
              <img
                src={products[i * 15].image}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5 flex justify-between">
              <div>
                <h2 className="font-extrabold">{t ? c.nameAr : c.name}</h2>
                <p className="text-xs text-slate-400 mt-1">
                  15 {t ? "منتج" : "products"}
                </p>
              </div>
              <span className="w-9 h-9 rounded-full bg-brand-50 text-brand-600 grid place-items-center">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

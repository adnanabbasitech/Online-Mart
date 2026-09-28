import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { products } from "../data/products";
import { useStore } from "../context";
import ProductGrid from "../components/ProductGrid";
export default function Wishlist() {
  const { wishlist, lang } = useStore();
  const t = lang === "ar";
  const list = products.filter((p) => wishlist.includes(p.id));
  return (
    <main className="container-x py-12">
      <div className="mb-10">
        <div className="text-brand-600 text-xs font-bold uppercase tracking-[.15em]">
          {t ? "المفضلة" : "Saved items"}
        </div>
        <h1 className="text-4xl font-extrabold mt-2">
          {t ? "قائمة المفضلة" : "Wishlist"}
        </h1>
      </div>
      {list.length ? (
        <ProductGrid products={list} />
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border">
          <Heart className="mx-auto text-slate-300" size={45} />
          <h2 className="font-bold text-xl mt-5">
            {t ? "لا توجد منتجات محفوظة" : "No saved products yet"}
          </h2>
          <Link
            to="/shop"
            className="inline-block mt-5 bg-[#063c2c] text-white px-6 py-3 rounded-full font-bold"
          >
            {t ? "استكشف المنتجات" : "Explore products"}
          </Link>
        </div>
      )}
    </main>
  );
}

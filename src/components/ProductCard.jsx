import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, ArrowUpRight } from "lucide-react";
import { useStore } from "../context";
export default function ProductCard({ product }) {
  const { lang, addToCart, toggleWish, wishlist } = useStore();
  const t = lang === "ar";
  const wished = wishlist.includes(product.id);
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[.95] overflow-hidden bg-slate-100">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={t ? product.nameAr : product.name}
            className="product-image w-full h-full object-cover"
          />
        </Link>
        <div className="absolute top-3 start-3 flex flex-col gap-2">
          {product.offer && (
            <span className="bg-[#063c2c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              {t ? "عرض" : "OFFER"}
            </span>
          )}
          {product.new && (
            <span className="bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              {t ? "جديد" : "NEW"}
            </span>
          )}
        </div>
        <button
          onClick={() => toggleWish(product.id)}
          className="absolute top-3 end-3 w-9 h-9 bg-white/90 rounded-full grid place-items-center"
        >
          {
            <Heart
              size={17}
              fill={wished ? "currentColor" : "none"}
              className={wished ? "text-red-500" : ""}
            />
          }
        </button>
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 end-3 bg-white rounded-full w-10 h-10 grid place-items-center shadow-lg hover:bg-brand-600 hover:text-white transition"
        >
          <ShoppingBag size={17} />
        </button>
      </div>
      <div className="p-4">
        <div className="text-[11px] text-brand-600 font-bold mb-1">
          {t ? product.categoryAr : product.category}
        </div>
        <Link
          to={`/product/${product.id}`}
          className="font-bold leading-5 hover:text-brand-600 line-clamp-2"
        >
          {t ? product.nameAr : product.name}
        </Link>
        <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs">
          <Star size={13} fill="currentColor" />
          <span>{product.rating}</span>
          <span className="text-slate-400">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="font-extrabold">{product.price} SAR</span>
          {product.oldPrice && (
            <del className="text-xs text-slate-400">{product.oldPrice} SAR</del>
          )}
        </div>
      </div>
    </div>
  );
}

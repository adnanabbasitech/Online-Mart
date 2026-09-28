import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  ArrowLeft,
  MessageCircle,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { products } from "../data/products";
import { useStore } from "../context";
import ProductGrid from "../components/ProductGrid";
export default function ProductDetails() {
  const { id } = useParams();
  const p = products.find((x) => x.id === Number(id)) || products[0];
  const { lang, addToCart, toggleWish, wishlist } = useStore();
  const t = lang === "ar";
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const wa = `https://wa.me/966500000000?text=${encodeURIComponent((t ? "مرحباً، أريد طلب: " : "Hello, I would like to order: ") + (t ? p.nameAr : p.name) + " — " + p.price + " SAR × " + qty)}`;
  return (
    <main className="container-x py-10">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-sm text-slate-500 mb-7"
      >
        <ArrowLeft size={16} />
        {t ? "العودة للمتجر" : "Back to shop"}
      </Link>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="rounded-3xl overflow-hidden bg-slate-100 aspect-square">
          <img src={p.image} className="w-full h-full object-cover" />
        </div>
        <div className="py-2">
          <div className="text-brand-600 text-xs font-extrabold uppercase tracking-[.15em]">
            {t ? p.categoryAr : p.category}
          </div>
          <h1 className="text-4xl font-extrabold mt-3">
            {t ? p.nameAr : p.name}
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <span className="flex items-center gap-1 text-amber-500">
              <Star size={16} fill="currentColor" />
              {p.rating}
            </span>
            <span className="text-sm text-slate-400">
              ({p.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <b className="text-3xl">{p.price} SAR</b>
            {p.oldPrice && (
              <del className="text-slate-400">{p.oldPrice} SAR</del>
            )}
          </div>
          <p className="text-slate-500 leading-8 mt-6">
            {t ? p.descriptionAr : p.description}
          </p>
          <div className="flex items-center gap-3 mt-7">
            <div className="flex items-center border border-slate-200 rounded-xl">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="p-3"
              >
                <Minus size={16} />
              </button>
              <b className="w-10 text-center">{qty}</b>
              <button onClick={() => setQty(qty + 1)} className="p-3">
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => {
                addToCart(p, qty);
                setAdded(true);
              }}
              className="flex-1 bg-[#063c2c] text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <ShoppingBag size={18} />
              {added
                ? t
                  ? "تمت الإضافة ✓"
                  : "Added ✓"
                : t
                  ? "أضف للسلة"
                  : "Add to cart"}
            </button>
            <button
              onClick={() => toggleWish(p.id)}
              className="p-3.5 border rounded-xl"
            >
              <Heart
                size={20}
                fill={wishlist.includes(p.id) ? "currentColor" : "none"}
              />
            </button>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full border border-emerald-200 bg-emerald-50 text-emerald-700 py-3.5 rounded-xl font-bold flex justify-center gap-2"
          >
            <MessageCircle size={18} />
            {t ? "اطلب عبر واتساب" : "Order on WhatsApp"}
          </a>
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            <div className="p-4 rounded-2xl bg-slate-50 flex gap-3">
              <Truck size={20} />
              <div>
                <b className="text-sm">
                  {t ? "توصيل داخل السعودية" : "Saudi delivery"}
                </b>
                <p className="text-xs text-slate-400 mt-1">
                  {t ? "تواصل معنا للتفاصيل" : "Contact us for details"}
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 flex gap-3">
              <ShieldCheck size={20} />
              <div>
                <b className="text-sm">{t ? "طلب آمن" : "Secure ordering"}</b>
                <p className="text-xs text-slate-400 mt-1">
                  {t
                    ? "تأكيد الطلب عبر واتساب"
                    : "Order confirmation via WhatsApp"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-20">
        <h2 className="text-2xl font-extrabold mb-6">
          {t ? "قد يعجبك أيضاً" : "You may also like"}
        </h2>
        <ProductGrid
          products={products
            .filter((x) => x.category === p.category && x.id !== p.id)
            .slice(0, 4)}
        />
      </section>
    </main>
  );
}

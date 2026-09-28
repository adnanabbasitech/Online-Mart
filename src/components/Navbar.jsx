import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingBag,
  Heart,
  X,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useStore } from "../context";

export default function Navbar() {
  const { cart, wishlist, lang, setLanguage } = useStore();
  const [open, setOpen] = useState(false);
  const t = lang === "ar";
  const links = t
    ? [
        ["/", "الرئيسية"],
        ["/shop", "المتجر"],
        ["/categories", "التصنيفات"],
        ["/offers", "العروض"],
        ["/new-arrivals", "وصل حديثاً"],
        ["/about", "من نحن"],
        ["/contact", "تواصل معنا"],
      ]
    : [
        ["/", "Home"],
        ["/shop", "Shop"],
        ["/categories", "Categories"],
        ["/offers", "Offers"],
        ["/new-arrivals", "New Arrivals"],
        ["/about", "About"],
        ["/contact", "Contact"],
      ];
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="container-x h-[74px] flex items-center justify-between gap-5">
        <Link to="/" className="shrink-0">
          <div className="text-2xl font-extrabold tracking-tight">
            NOVA<span className="text-brand-600">MART</span>
          </div>
          <div className="text-[9px] tracking-[.28em] text-slate-400 text-center">
            SAUDI RETAIL
          </div>
        </Link>
        <nav className="hidden xl:flex items-center gap-6">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? "text-brand-600" : "text-slate-600 hover:text-brand-600"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link to="/shop" className="p-2.5 hover:bg-slate-50 rounded-full">
            <Search size={19} />
          </Link>
          <button
            onClick={() => setLanguage(t ? "en" : "ar")}
            className="hidden sm:flex items-center gap-1.5 p-2.5 text-sm font-bold"
          >
            <Globe size={17} />
            {t ? "EN" : "العربية"}
          </button>
          <Link
            to="/wishlist"
            className="relative p-2.5 hover:bg-slate-50 rounded-full"
          >
            <Heart size={19} />
            {wishlist.length > 0 && (
              <b className="absolute -top-0.5 -right-0.5 bg-brand-600 text-white text-[9px] rounded-full min-w-4 h-4 grid place-items-center">
                {wishlist.length}
              </b>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative p-2.5 hover:bg-slate-50 rounded-full"
          >
            <ShoppingBag size={20} />
            {cart.length > 0 && (
              <b className="absolute -top-0.5 -right-0.5 bg-brand-600 text-white text-[9px] rounded-full min-w-4 h-4 grid place-items-center">
                {cart.reduce((s, x) => s + x.qty, 0)}
              </b>
            )}
          </Link>
          <button className="xl:hidden p-2.5" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t bg-white">
          <nav className="container-x py-3 grid gap-1">
            {links.map(([to, label]) => (
              <Link
                onClick={() => setOpen(false)}
                className="py-3 font-semibold"
                key={to}
                to={to}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(t ? "en" : "ar")}
              className="py-3 text-start font-semibold"
            >
              {t ? "English" : "العربية"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

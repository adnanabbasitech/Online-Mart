import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  MessageCircle,
  Star,
} from "lucide-react";
import { products, categories } from "../data/products";
import { useStore } from "../context";
import ProductGrid from "../components/ProductGrid";
import SectionTitle from "../components/SectionTitle";
export default function Home() {
  const { lang } = useStore();
  const t = lang === "ar";
  return (
    <main>
      <section className="hero-grid">
        <div className="container-x grid lg:grid-cols-2 min-h-[600px] items-center gap-10 py-14">
          <div className={t ? "lg:order-2" : ""}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 px-4 py-2 text-xs font-bold mb-6">
              <span className="w-2 h-2 bg-brand-500 rounded-full" />
              {t ? "مختارات جديدة كل أسبوع" : "Fresh picks every week"}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[.98] tracking-[-.04em] max-w-xl">
              {t ? "كل ما تحتاجه." : "Everyday essentials."}
              <span className="block text-brand-600">
                {t ? "ببساطة أفضل." : "Simply better."}
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-8 max-w-lg mt-6">
              {t
                ? "اكتشف منتجات عملية بأسعار تبدأ من 5 ريال، واطلبها بسهولة عبر واتساب داخل السعودية."
                : "Discover practical products from 5 SAR and place your order directly through WhatsApp across Saudi Arabia."}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/shop"
                className="bg-[#063c2c] text-white px-7 py-4 rounded-full font-bold flex items-center gap-2"
              >
                {t ? "تسوق الآن" : "Shop now"}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/offers"
                className="bg-white border border-slate-200 px-7 py-4 rounded-full font-bold"
              >
                {t ? "شاهد العروض" : "View offers"}
              </Link>
            </div>
            <div className="flex gap-8 mt-9 text-xs font-semibold text-slate-500">
              <span>✓ {t ? "أسعار تبدأ من 5 ريال" : "From 5 SAR"}</span>
              <span>✓ {t ? "طلب عبر واتساب" : "WhatsApp ordering"}</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden aspect-[.95] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 start-4 md:start-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-full grid place-items-center">
                <Truck size={21} />
              </div>
              <div>
                <b className="text-sm">
                  {t ? "توصيل داخل السعودية" : "Saudi-wide delivery"}
                </b>
                <div className="text-xs text-slate-400 mt-1">
                  {t ? "اطلب مباشرة عبر واتساب" : "Order directly on WhatsApp"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-x py-20">
        <SectionTitle
          eyebrow={t ? "تسوق حسب القسم" : "Shop by category"}
          title={t ? "كل ما تحتاجه في مكان واحد" : "Everything in one place"}
          link="/categories"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((c, i) => (
            <Link
              key={c.name}
              to={`/shop?category=${encodeURIComponent(c.name)}`}
              className="relative h-36 md:h-48 rounded-2xl overflow-hidden group"
            >
              <img
                src={products[i * 15]?.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-4 start-4 text-white">
                <b className="block">{t ? c.nameAr : c.name}</b>
                <span className="text-xs text-white/70">
                  15 {t ? "منتج" : "products"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-x pb-20">
        <SectionTitle
          eyebrow={t ? "مختاراتنا" : "Our picks"}
          title={t ? "الأكثر طلباً" : "Best sellers"}
        />
        <ProductGrid
          products={products.filter((p) => p.featured).slice(0, 8)}
        />
      </section>
      <section className="bg-[#063c2c] text-white">
        <div className="container-x py-16 grid md:grid-cols-3 gap-8">
          {[
            [
              Truck,
              t ? "توصيل موثوق" : "Reliable delivery",
              t ? "خدمة توصيل داخل السعودية" : "Delivery across Saudi Arabia",
            ],
            [
              MessageCircle,
              t ? "اطلب عبر واتساب" : "Order on WhatsApp",
              t ? "تواصل مباشر وسهل مع المتجر" : "Simple direct ordering",
            ],
            [
              ShieldCheck,
              t ? "اختيارات موثوقة" : "Trusted picks",
              t
                ? "منتجات يومية بأسعار مناسبة"
                : "Practical products at fair prices",
            ],
          ].map(([I, h, p]) => (
            <div key={h} className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 grid place-items-center shrink-0">
                <I />
              </div>
              <div>
                <h3 className="font-bold">{h}</h3>
                <p className="text-sm text-white/60 mt-1 leading-6">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x py-20">
        <SectionTitle
          eyebrow={t ? "وصل حديثاً" : "Just landed"}
          title={t ? "منتجات جديدة" : "New arrivals"}
          link="/new-arrivals"
        />
        <ProductGrid products={products.filter((p) => p.new).slice(0, 8)} />
      </section>
      <section className="container-x pb-20">
        <div className="rounded-3xl bg-brand-50 p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-brand-600 font-bold text-sm">
              {t ? "اطلب بسهولة" : "Easy ordering"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
              {t
                ? "اختر منتجاتك، وسنعتني بالباقي."
                : "Pick your products. We’ll handle the rest."}
            </h2>
            <p className="text-slate-500 mt-4 leading-7">
              {t
                ? "أضف المنتجات إلى السلة ثم أرسل الطلب عبر واتساب."
                : "Add products to your cart and send the complete order through WhatsApp."}
            </p>
            <Link
              to="/shop"
              className="inline-flex mt-6 bg-[#063c2c] text-white px-6 py-3 rounded-full font-bold"
            >
              {t ? "ابدأ التسوق" : "Start shopping"}
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

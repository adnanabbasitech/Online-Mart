import React from "react";
import { HeartHandshake, ShieldCheck, Users, Star } from "lucide-react";
import { useStore } from "../context";
export default function About() {
  const { lang } = useStore();
  const t = lang === "ar";
  return (
    <main>
      <section className="container-x py-14 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-brand-600 text-xs font-bold uppercase tracking-[.18em]">
            {t ? "قصتنا" : "Our story"}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-3">
            {t ? "تسوق يومي، بطريقة أبسط." : "Everyday shopping, made simpler."}
          </h1>
          <p className="text-slate-500 leading-8 mt-6">
            {t
              ? "NOVA MART هو نموذج متجر سعودي حديث يركز على المنتجات العملية، الأسعار الواضحة، وتجربة طلب سهلة عبر واتساب."
              : "NOVA MART is a modern Saudi retail concept focused on practical products, clear pricing and an easy WhatsApp ordering experience."}
          </p>
          <p className="text-slate-500 leading-8 mt-4">
            {t
              ? "نختار المنتجات التي تضيف قيمة حقيقية للحياة اليومية، مع تجربة رقمية سريعة على الجوال."
              : "We curate products that add real value to everyday life, with a fast mobile-first shopping experience."}
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[.9]">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1100&q=85"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            [HeartHandshake, t ? "نهتم بالتجربة" : "Customer first"],
            [ShieldCheck, t ? "ثقة ووضوح" : "Clear & trusted"],
            [Users, t ? "للمجتمع السعودي" : "Made for Saudi shoppers"],
          ].map(([I, h]) => (
            <div
              className="bg-white rounded-2xl p-7 border border-slate-100"
              key={h}
            >
              <I className="text-brand-600" />
              <h3 className="font-extrabold text-lg mt-5">{h}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-6">
                {t
                  ? "نصمم كل خطوة لتكون واضحة وسهلة."
                  : "Every step is designed to feel clear and effortless."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

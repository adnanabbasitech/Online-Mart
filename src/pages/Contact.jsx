import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useStore } from "../context";
export default function Contact() {
  const { lang } = useStore();
  const t = lang === "ar";
  return (
    <main className="container-x py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-brand-600 text-xs font-bold uppercase tracking-[.18em]">
            {t ? "تواصل معنا" : "Get in touch"}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            {t ? "نحن هنا لمساعدتك." : "We’re here to help."}
          </h1>
          <p className="text-slate-500 leading-7 mt-5">
            {t
              ? "للاستفسارات والطلبات، تواصل معنا مباشرة عبر واتساب أو الهاتف."
              : "For questions and orders, reach us directly via WhatsApp or phone."}
          </p>
          <div className="grid gap-4 mt-8">
            {[
              [
                MessageCircle,
                t ? "واتساب" : "+966 50 000 0000",
                "https://wa.me/966500000000",
              ],
              [MapPin, "Riyadh, Saudi Arabia", "#"],
              [Mail, "hello@novamart.sa", "mailto:hello@novamart.sa"],
              [
                Clock,
                t ? "السبت - الخميس | 9 ص - 11 م" : "Sat - Thu | 9 AM - 11 PM",
                "#",
              ],
            ].map(([I, h, v, href]) => (
              <a
                href={href}
                key={v}
                className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-brand-200"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <I size={20} />
                </div>
                <div>
                  <b className="text-sm">{h}</b>
                  <p className="text-sm text-slate-500 mt-1">{v}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-white border rounded-3xl p-7">
          <h2 className="text-xl font-extrabold">
            {t ? "أرسل رسالة" : "Send us a message"}
          </h2>
          <div className="grid gap-4 mt-6">
            <input
              placeholder={t ? "الاسم" : "Name"}
              className="border rounded-xl px-4 py-3.5 outline-none"
            />
            <input
              placeholder={t ? "رقم الجوال" : "Mobile number"}
              className="border rounded-xl px-4 py-3.5 outline-none"
            />
            <textarea
              rows="5"
              placeholder={t ? "كيف يمكننا مساعدتك؟" : "How can we help?"}
              className="border rounded-xl px-4 py-3.5 outline-none resize-none"
            />
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white rounded-xl py-4 font-bold text-center"
            >
              {t ? "إرسال عبر واتساب" : "Send via WhatsApp"}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 rounded-3xl overflow-hidden h-72 bg-slate-200">
        <iframe
          title="map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&output=embed"
        />
      </div>
    </main>
  );
}

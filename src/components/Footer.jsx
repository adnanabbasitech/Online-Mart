import React from "react";
import {Link} from "react-router-dom";
import {Instagram,Facebook,MessageCircle,MapPin,Phone,Mail} from "lucide-react";
import {useStore} from "../context";
export default function Footer(){
 const {lang}=useStore(); const t=lang==="ar";
 return <footer className="bg-[#071c15] text-white mt-20">
  <div className="container-x py-14 grid md:grid-cols-4 gap-10">
   <div className="md:col-span-1"><div className="text-2xl font-extrabold">NOVA<span className="text-emerald-400">MART</span></div><p className="text-slate-400 mt-4 text-sm leading-7">{t?"منتجات يومية مختارة بأسعار مناسبة، مع طلب سريع عبر واتساب داخل السعودية.":"Everyday products, thoughtfully selected at accessible prices, with fast WhatsApp ordering across Saudi Arabia."}</p><div className="flex gap-2 mt-5"><a className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Instagram size={17}/></a><a className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Facebook size={17}/></a></div></div>
   <div><h4 className="font-bold mb-4">{t?"التسوق":"Shop"}</h4><div className="grid gap-3 text-sm text-slate-400"><Link to="/shop">{t?"كل المنتجات":"All Products"}</Link><Link to="/offers">{t?"العروض":"Offers"}</Link><Link to="/new-arrivals">{t?"وصل حديثاً":"New Arrivals"}</Link><Link to="/categories">{t?"التصنيفات":"Categories"}</Link></div></div>
   <div><h4 className="font-bold mb-4">{t?"المساعدة":"Help"}</h4><div className="grid gap-3 text-sm text-slate-400"><Link to="/contact">{t?"تواصل معنا":"Contact Us"}</Link><Link to="/about">{t?"من نحن":"About Us"}</Link><span>{t?"سياسة الاستبدال":"Return Policy"}</span><span>{t?"الشحن والتوصيل":"Delivery Information"}</span></div></div>
   <div><h4 className="font-bold mb-4">{t?"تواصل معنا":"Contact"}</h4><div className="grid gap-3 text-sm text-slate-400"><span className="flex gap-2"><MapPin size={17}/> Riyadh, Saudi Arabia</span><span className="flex gap-2"><Phone size={17}/> +966 50 000 0000</span><span className="flex gap-2"><Mail size={17}/> hello@novamart.sa</span><a href="https://wa.me/966500000000" className="flex gap-2 text-emerald-400"><MessageCircle size={17}/> WhatsApp</a></div></div>
  </div>
  <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© 2026 NOVA MART. Demo website for Saudi retail businesses.</div>
 </footer>
}
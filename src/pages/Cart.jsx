import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useStore } from "../context";
export default function Cart() {
  const { cart, total, updateQty, removeFromCart, lang } = useStore();
  const t = lang === "ar";
  const msg =
    (t
      ? "مرحباً، أريد تأكيد هذا الطلب:\n\n"
      : "Hello, I would like to confirm this order:\n\n") +
    cart
      .map(
        (x, i) =>
          `${i + 1}. ${t ? x.nameAr : x.name} — ${x.price} SAR × ${x.qty} = ${x.price * x.qty} SAR`,
      )
      .join("\n") +
    (t
      ? `\n\nالإجمالي: ${total} SAR\nالاسم:\nالعنوان:\nملاحظات:`
      : `\n\nTotal: ${total} SAR\nName:\nAddress:\nNotes:`);
  const wa = `https://wa.me/966500000000?text=${encodeURIComponent(msg)}`;
  return (
    <main className="container-x py-12">
      <div className="mb-10">
        <div className="text-brand-600 text-xs font-bold uppercase tracking-[.15em]">
          {t ? "سلتك" : "Your bag"}
        </div>
        <h1 className="text-4xl font-extrabold mt-2">
          {t ? "مراجعة الطلب" : "Review your order"}
        </h1>
      </div>
      {!cart.length ? (
        <div className="bg-white rounded-3xl border p-14 text-center">
          <ShoppingBag className="mx-auto text-slate-300" size={45} />
          <h2 className="text-xl font-bold mt-5">
            {t ? "السلة فارغة" : "Your cart is empty"}
          </h2>
          <Link
            to="/shop"
            className="inline-block mt-5 bg-[#063c2c] text-white px-6 py-3 rounded-full font-bold"
          >
            {t ? "ابدأ التسوق" : "Start shopping"}
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <section className="bg-white rounded-2xl border p-5 md:p-7">
            {cart.map((x) => (
              <div
                key={x.id}
                className="flex gap-4 py-5 border-b last:border-0"
              >
                <img
                  src={x.image}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <Link to={`/product/${x.id}`} className="font-bold">
                    {t ? x.nameAr : x.name}
                  </Link>
                  <div className="text-sm text-slate-400 mt-1">
                    {x.price} SAR
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => updateQty(x.id, x.qty - 1)}
                        className="p-2"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{x.qty}</span>
                      <button
                        onClick={() => updateQty(x.id, x.qty + 1)}
                        className="p-2"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(x.id)}
                      className="text-slate-400 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <b>{x.price * x.qty} SAR</b>
              </div>
            ))}
          </section>
          <aside className="bg-white rounded-2xl border p-6 h-fit lg:sticky lg:top-28">
            <h2 className="font-extrabold text-xl">
              {t ? "ملخص الطلب" : "Order summary"}
            </h2>
            <div className="flex justify-between mt-6 text-sm text-slate-500">
              <span>{t ? "المنتجات" : "Products"}</span>
              <span>{total} SAR</span>
            </div>
            <div className="flex justify-between mt-3 text-sm text-slate-500">
              <span>{t ? "التوصيل" : "Delivery"}</span>
              <span>{t ? "يُحدد عبر واتساب" : "Confirmed on WhatsApp"}</span>
            </div>
            <div className="border-t mt-5 pt-5 flex justify-between font-extrabold">
              <span>{t ? "الإجمالي" : "Total"}</span>
              <span>{total} SAR</span>
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-6 bg-[#25D366] text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <MessageCircle size={20} />
              {t ? "إرسال الطلب عبر واتساب" : "Send order on WhatsApp"}
            </a>
            <p className="text-[11px] text-slate-400 mt-3 text-center">
              {t
                ? "سيتم فتح واتساب برسالة طلب جاهزة."
                : "WhatsApp will open with your order details ready to send."}
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}

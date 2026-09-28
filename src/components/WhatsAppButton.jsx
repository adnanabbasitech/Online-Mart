import React from "react";
import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 end-5 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full grid place-items-center shadow-xl hover:scale-105 transition"
      aria-label="WhatsApp"
    >
      <MessageCircle size={27} />
    </a>
  );
}

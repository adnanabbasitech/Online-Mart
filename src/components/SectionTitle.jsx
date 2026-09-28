import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useStore } from "../context";
export default function SectionTitle({ eyebrow, title, link = "/shop" }) {
  const { lang } = useStore();
  return (
    <div className="flex items-end justify-between gap-5 mb-7">
      <div>
        <div className="text-brand-600 text-xs font-extrabold uppercase tracking-[.18em] mb-2">
          {eyebrow}
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>
      </div>
      <Link
        to={link}
        className="hidden sm:flex items-center gap-2 text-sm font-bold hover:text-brand-600"
      >
        {lang === "ar" ? "عرض الكل" : "View all"}
        <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}

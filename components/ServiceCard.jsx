import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ServiceCard({ service }) {
  return (
    <GlassCard
      className="p-6 sm:p-7 flex flex-col justify-between group h-full transition-all duration-300 border-white/80 hover:border-brand-blue/40"
    >
      <div>
        {/* Top bar with number and arrow */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-display font-black text-2xl text-slate-300 group-hover:text-brand-blue transition-colors duration-300">
            {service.num}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/80 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B1F33] mb-2 group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
          {service.shortDesc}
        </p>

        {/* Key Features List */}
        <ul className="space-y-2 mb-6 pt-3 border-t border-slate-200/60" aria-label={`Kenmerken van ${service.title}`}>
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-xs text-slate-600">
              <div className="w-4 h-4 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-brand-blue" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action link */}
      <div className="pt-2">
        <Link
          href={`/diensten#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue group-hover:text-blue-700 transition-colors"
        >
          <span>Meer informatie & details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </GlassCard>
  );
}

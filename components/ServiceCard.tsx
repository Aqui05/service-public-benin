import Link from "next/link";
import { Clock, Banknote, Wifi, WifiOff, ArrowRight } from "lucide-react";
import { Service } from "@/lib/types";
import { getCategoryMeta } from "@/lib/data";
import clsx from "clsx";

interface Props {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: Props) {
  const cat = getCategoryMeta(service.category);

  return (
    <Link
      href={`/services/${service.id}`}
      className={clsx(
        "group block bg-white rounded-2xl border border-slate-200 hover:border-[#008751] hover:shadow-lg transition-all duration-200 overflow-hidden",
        className
      )}
    >
      <div className="p-6">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={clsx("inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border", cat?.color)}>
            <span>{cat?.icon}</span>
            {cat?.label}
          </span>
          {service.online ? (
            <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
              <Wifi size={12} />
              En ligne
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
              <WifiOff size={12} />
              En présentiel
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-slate-900 text-lg mb-2 group-hover:text-[#008751] transition-colors line-clamp-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {service.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 border-t border-slate-100 pt-4">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {service.duration}
          </span>
          <span className="flex items-center gap-1">
            <Banknote size={12} />
            {service.cost}
          </span>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="px-6 py-3 bg-slate-50 group-hover:bg-green-50 flex items-center justify-between transition-colors">
        <span className="text-xs text-slate-500 group-hover:text-[#008751] transition-colors font-medium">
          Voir la démarche
        </span>
        <ArrowRight size={14} className="text-slate-400 group-hover:text-[#008751] group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

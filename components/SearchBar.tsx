"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

interface Props {
  defaultValue?: string;
  className?: string;
  size?: "sm" | "lg";
}

export default function SearchBar({ defaultValue = "", className = "", size = "lg" }: Props) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/services?q=${encodeURIComponent(query.trim())}`);
      } else {
        router.push("/services");
      }
    },
    [query, router]
  );

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search
        size={size === "lg" ? 20 : 16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher une démarche administrative..."
        className={`w-full bg-white border border-slate-200 rounded-xl shadow-sm
          focus:outline-none focus:ring-2 focus:ring-[#008751] focus:border-transparent
          placeholder:text-slate-400 text-slate-900
          ${size === "lg" ? "pl-12 pr-32 py-4 text-base" : "pl-10 pr-24 py-2.5 text-sm"}`}
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute right-24 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
        >
          <X size={14} />
        </button>
      )}
      <button
        type="submit"
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-[#008751] hover:bg-[#006b40]
          text-white font-medium rounded-lg transition-colors
          ${size === "lg" ? "px-5 py-2 text-sm" : "px-3 py-1.5 text-xs"}`}
      >
        Rechercher
      </button>
    </form>
  );
}

import { Suspense } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import { CATEGORIES, searchServices, getServicesByCategory } from "@/lib/data";

interface Props {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default async function ServicesPage({ searchParams }: Props) {
  const { q, category } = await searchParams;

  let services = q
    ? searchServices(q)
    : category
    ? getServicesByCategory(category)
    : searchServices("");

  const activeCategory = CATEGORIES.find((c) => c.id === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          {q
            ? `Résultats pour "${q}"`
            : activeCategory
            ? `${activeCategory.icon} ${activeCategory.label}`
            : "Tous les services"}
        </h1>
        <p className="text-slate-500">
          {services.length} service{services.length !== 1 ? "s" : ""} trouvé{services.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Search */}
      <SearchBar defaultValue={q ?? ""} size="sm" className="mb-8 max-w-2xl" />

      <div className="flex gap-8">
        {/* Sidebar categories */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sticky top-24">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-4">
              <Filter size={14} />
              Catégories
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/services"
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    !category
                      ? "bg-[#008751] text-white font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Tous</span>
                  <span className={`text-xs ${!category ? "text-white/80" : "text-slate-400"}`}>
                    {searchServices("").length}
                  </span>
                </Link>
              </li>
              {CATEGORIES.map((cat) => {
                const count = getServicesByCategory(cat.id).length;
                const active = category === cat.id;
                return (
                  <li key={cat.id}>
                    <Link
                      href={`/services?category=${cat.id}`}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        active
                          ? "bg-[#008751] text-white font-medium"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        {cat.label}
                      </span>
                      <span className={`text-xs ${active ? "text-white/80" : "text-slate-400"}`}>
                        {count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Services grid */}
        <div className="flex-1">
          {services.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-4xl mb-4">🔍</p>
              <p className="font-display text-xl font-semibold text-slate-700 mb-2">
                Aucun service trouvé
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Essayez d'autres mots-clés ou parcourez les catégories.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#008751] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#006b40] transition-colors"
              >
                Voir tous les services
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

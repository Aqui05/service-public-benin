import Link from "next/link";
import { ArrowRight, Shield, Clock, Globe } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import { CATEGORIES, SERVICES } from "@/lib/data";

export default function HomePage() {
  const featured = SERVICES.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f2d5e] via-[#1a56a0] to-[#0f2d5e] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Green accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#008751] via-[#FCD116] to-[#E8112D]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#008751] animate-pulse" />
              Portail officiel des services administratifs
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vos démarches
              <span className="block text-[#FCD116]">simplifiées.</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Accédez à tous les services administratifs de la République du Bénin en un seul endroit. Rapide, clair, officiel.
            </p>

            <SearchBar className="max-w-2xl" size="lg" />

            <div className="flex flex-wrap gap-3 mt-6">
              {["Acte de naissance", "Passeport", "Création entreprise", "IFU"].map((q) => (
                <Link
                  key={q}
                  href={`/services?q=${encodeURIComponent(q)}`}
                  className="text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-1.5 transition-colors backdrop-blur-sm"
                >
                  {q}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-wrap gap-6 md:gap-12">
              {[
                { n: SERVICES.length, label: "Services disponibles" },
                { n: SERVICES.filter((s) => s.online).length, label: "Démarches en ligne" },
                { n: CATEGORIES.length, label: "Catégories" },
              ].map(({ n, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-[#FCD116]">{n}</span>
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Parcourir par catégorie
            </h2>
            <p className="text-slate-500 mt-1">Trouvez rapidement votre démarche</p>
          </div>
          <Link
            href="/services"
            className="hidden sm:flex items-center gap-2 text-[#008751] text-sm font-medium hover:underline"
          >
            Tout voir <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => {
            const count = SERVICES.filter((s) => s.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/services?category=${cat.id}`}
                className="group flex flex-col items-center justify-center gap-2 p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#008751] hover:shadow-md transition-all text-center"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="font-medium text-slate-800 text-sm group-hover:text-[#008751] transition-colors">
                  {cat.label}
                </span>
                <span className="text-xs text-slate-400">{count} service{count > 1 ? "s" : ""}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-slate-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                Démarches fréquentes
              </h2>
              <p className="text-slate-500 mt-1">Les services les plus consultés</p>
            </div>
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-2 text-[#008751] text-sm font-medium hover:underline"
            >
              Voir tout <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Shield className="text-[#008751]" size={24} />,
              title: "Informations officielles",
              desc: "Toutes les données sont issues des ministères et administrations officiels de la République du Bénin.",
            },
            {
              icon: <Clock className="text-[#1a56a0]" size={24} />,
              title: "Délais & coûts clairs",
              desc: "Chaque démarche indique le délai de traitement et les frais exacts, sans surprise.",
            },
            {
              icon: <Globe className="text-[#E8112D]" size={24} />,
              title: "Démarches en ligne",
              desc: "De nombreux services sont accessibles directement en ligne, sans déplacement nécessaire.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

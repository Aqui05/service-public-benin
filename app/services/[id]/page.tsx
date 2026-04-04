import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Clock, Banknote, Building2,
  FileText, ListChecks, Wifi, WifiOff, CheckCircle2,
} from "lucide-react";
import { getServiceById, getCategoryMeta, SERVICES } from "@/lib/data";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceById(params.id);
  if (!service) notFound();

  const cat = getCategoryMeta(service.category);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-[#008751] transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/services" className="hover:text-[#008751] transition-colors">Services</Link>
        <span>/</span>
        <Link href={`/services?category=${service.category}`} className="hover:text-[#008751] transition-colors">
          {cat?.label}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium truncate max-w-xs">{service.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${cat?.color}`}>
                <span>{cat?.icon}</span>
                {cat?.label}
              </span>
              {service.online ? (
                <span className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <Wifi size={13} /> Disponible en ligne
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-sm text-slate-500 font-medium bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  <WifiOff size={13} /> En présentiel
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl font-bold text-slate-900 mb-4">
              {service.title}
            </h1>
            <p className="text-slate-600 leading-relaxed text-base">
              {service.description}
            </p>
          </div>

          {/* Documents requis */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-blue-600" />
              </div>
              <h2 className="font-display text-xl font-semibold text-slate-900">
                Documents requis
              </h2>
            </div>
            <ul className="space-y-3">
              {service.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={16} className="text-[#008751] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Étapes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <ListChecks size={16} className="text-[#008751]" />
              </div>
              <h2 className="font-display text-xl font-semibold text-slate-900">
                Comment faire ?
              </h2>
            </div>
            <ol className="space-y-4">
              {service.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#008751] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 text-sm leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Info card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
            <h3 className="font-display font-semibold text-slate-900 text-lg">
              Informations pratiques
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={15} className="text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Délai de traitement</p>
                <p className="text-sm font-medium text-slate-800">{service.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Banknote size={15} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Coût</p>
                <p className="text-sm font-medium text-slate-800">{service.cost}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 size={15} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Ministère</p>
                <p className="text-sm font-medium text-slate-800">{service.ministry}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          {service.online && (
            <div className="bg-[#008751] rounded-2xl p-6 text-white">
              <h3 className="font-display font-semibold text-lg mb-2">
                Faire la démarche en ligne
              </h3>
              <p className="text-green-100 text-sm mb-4">
                Cette démarche est disponible directement en ligne sur le portail officiel.
              </p>
              <a
                href="https://service-public.bj"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-white text-[#008751] font-semibold text-sm py-3 rounded-xl hover:bg-green-50 transition-colors"
              >
                Accéder au portail →
              </a>
            </div>
          )}

          {/* Back */}
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#008751] transition-colors"
          >
            <ArrowLeft size={14} />
            Retour aux services
          </Link>
        </div>
      </div>
    </div>
  );
}

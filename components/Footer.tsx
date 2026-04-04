import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2d5e] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded overflow-hidden border border-white/20 flex-shrink-0">
                <div className="h-full flex">
                  <div className="w-1/3 bg-[#008751]" />
                  <div className="flex flex-col w-2/3">
                    <div className="flex-1 bg-[#FCD116]" />
                    <div className="flex-1 bg-[#E8112D]" />
                  </div>
                </div>
              </div>
              <span className="font-display font-semibold text-sm">Services Publics — Bénin</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Le portail officiel des démarches administratives de la République du Bénin.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-slate-200">Catégories</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                ["État Civil", "etat-civil"],
                ["Entreprises", "entreprise"],
                ["Éducation", "education"],
                ["Fiscalité", "fiscalite"],
              ].map(([label, cat]) => (
                <li key={cat}>
                  <Link href={`/services?category=${cat}`} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-slate-200">Liens utiles</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://www.gouv.bj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Gouvernement du Bénin</a></li>
              <li><a href="https://www.asin.bj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">ASIN</a></li>
              <li><a href="https://service-public.bj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">service-public.bj</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© 2026 République du Bénin — Portail National des Services Publics</p>
          <p>Projet réalisé par <span className="text-slate-300">Aquilas KIKISSAGBE</span></p>
        </div>
      </div>
    </footer>
  );
}

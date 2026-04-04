# 🇧🇯 Portail National des Services Publics — Bénin

Interface web moderne simulant un portail de services administratifs publics, réalisée avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## 🎯 Fonctionnalités

- **Page d'accueil** avec hero, barre de recherche, catégories et services en vedette
- **Recherche full-text** sur les titres, descriptions et tags
- **Filtrage par catégorie** (8 catégories : état civil, éducation, santé, etc.)
- **Fiche service détaillée** avec documents requis, étapes, délais et coûts
- **Design responsive** mobile-first
- **Navigation** avec breadcrumb et sidebar sticky

## 🛠️ Stack

| Technologie | Usage |
|---|---|
| Next.js 14 (App Router) | Framework React SSR |
| TypeScript | Typage statique |
| Tailwind CSS | Styles utilitaires |
| Lucide React | Icônes |

## 🚀 Lancement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 🗂️ Structure

```
portail-services/
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Page d'accueil
│   └── services/
│       ├── page.tsx        # Liste + recherche + filtres
│       └── [id]/page.tsx   # Détail d'un service
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx
│   └── ServiceCard.tsx
└── lib/
    ├── types.ts            # Types TypeScript
    └── data.ts             # Données mock (10 services)
```

## 👤 Auteur

**Aquilas KIKISSAGBE** — [GitHub](https://github.com/Aqui05)

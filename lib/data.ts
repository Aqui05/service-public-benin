import { Service, CategoryMeta } from "./types";

export const CATEGORIES: CategoryMeta[] = [
  { id: "etat-civil",  label: "État Civil",       icon: "👤", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { id: "education",   label: "Éducation",         icon: "🎓", color: "bg-green-50 text-green-700 border-green-200" },
  { id: "sante",       label: "Santé",             icon: "🏥", color: "bg-red-50 text-red-700 border-red-200" },
  { id: "entreprise",  label: "Entreprise",        icon: "🏢", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  { id: "justice",     label: "Justice",           icon: "⚖️", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { id: "transport",   label: "Transport",         icon: "🚗", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { id: "social",      label: "Action Sociale",    icon: "🤝", color: "bg-teal-50 text-teal-700 border-teal-200" },
  { id: "fiscalite",   label: "Fiscalité",         icon: "📊", color: "bg-slate-50 text-slate-700 border-slate-200" },
];

export const SERVICES: Service[] = [
  {
    id: "acte-naissance",
    title: "Demande d'acte de naissance",
    description: "Obtenez une copie intégrale ou un extrait de votre acte de naissance auprès de la mairie de votre lieu de naissance.",
    category: "etat-civil",
    ministry: "Ministère de l'Intérieur et de la Sécurité Publique",
    duration: "3 à 5 jours ouvrés",
    cost: "Gratuit",
    documents: [
      "Pièce d'identité en cours de validité",
      "Livret de famille (si disponible)",
      "Formulaire de demande rempli",
    ],
    steps: [
      "Remplir le formulaire de demande en ligne ou en mairie",
      "Joindre les pièces justificatives requises",
      "Déposer ou envoyer le dossier à la mairie concernée",
      "Récupérer l'acte ou le recevoir par courrier",
    ],
    online: true,
    tags: ["naissance", "état civil", "mairie", "acte"],
  },
  {
    id: "carte-nationale",
    title: "Carte Nationale d'Identité",
    description: "Demandez ou renouvelez votre Carte Nationale d'Identité (CNI) béninoise, document officiel d'identité reconnu sur le territoire national.",
    category: "etat-civil",
    ministry: "Ministère de l'Intérieur et de la Sécurité Publique",
    duration: "15 à 30 jours",
    cost: "2 000 FCFA",
    documents: [
      "Acte de naissance (original ou copie certifiée)",
      "Certificat de nationalité",
      "2 photos d'identité récentes",
      "Justificatif de domicile",
    ],
    steps: [
      "Constituer le dossier complet",
      "Se rendre au commissariat ou à la préfecture",
      "Prise d'empreintes et de photos",
      "Payer les frais de dossier",
      "Récupérer la CNI à la date indiquée",
    ],
    online: false,
    tags: ["identité", "CNI", "carte", "document"],
  },
  {
    id: "passeport",
    title: "Demande de passeport biométrique",
    description: "Obtenez votre passeport biométrique béninois pour vos voyages à l'étranger. Valable 5 ans pour les adultes.",
    category: "etat-civil",
    ministry: "Ministère des Affaires Étrangères",
    duration: "7 à 21 jours",
    cost: "25 000 FCFA",
    documents: [
      "CNI en cours de validité",
      "Acte de naissance",
      "Certificat de nationalité",
      "2 photos biométriques",
      "Justificatif de domicile",
    ],
    steps: [
      "Prendre rendez-vous en ligne ou à l'ANIP",
      "Déposer le dossier complet",
      "Effectuer le paiement",
      "Prise des données biométriques",
      "Retrait du passeport",
    ],
    online: true,
    tags: ["passeport", "voyage", "international", "biométrique"],
  },
  {
    id: "inscription-universite",
    title: "Inscription à l'Université",
    description: "Procédez à votre inscription administrative dans les universités publiques du Bénin pour l'année académique en cours.",
    category: "education",
    ministry: "Ministère de l'Enseignement Supérieur et de la Recherche Scientifique",
    duration: "Immédiat en ligne",
    cost: "Varie selon le niveau",
    documents: [
      "Baccalauréat ou diplôme équivalent",
      "Relevé de notes du baccalauréat",
      "Acte de naissance",
      "CNI ou passeport",
      "2 photos d'identité",
    ],
    steps: [
      "Créer un compte sur la plateforme nationale d'inscription",
      "Remplir le dossier en ligne",
      "Soumettre les documents numérisés",
      "Payer les frais d'inscription en ligne",
      "Récupérer la quittance et la carte d'étudiant",
    ],
    online: true,
    tags: ["université", "inscription", "étudiant", "académique"],
  },
  {
    id: "creation-entreprise",
    title: "Création d'entreprise",
    description: "Créez votre entreprise en quelques étapes grâce au guichet unique de création d'entreprise. SARL, SA, ou entreprise individuelle.",
    category: "entreprise",
    ministry: "Ministère du Commerce et de l'Industrie",
    duration: "24 à 72 heures",
    cost: "À partir de 50 000 FCFA",
    documents: [
      "CNI des fondateurs",
      "Statuts de la société (notariés)",
      "Justificatif du capital social",
      "Formulaire de demande d'immatriculation",
      "Contrat de bail ou titre de propriété",
    ],
    steps: [
      "Choisir la forme juridique de l'entreprise",
      "Rédiger les statuts avec un notaire",
      "Déposer le dossier au Guichet Unique de Formalités des Entreprises (GUFE)",
      "Obtenir le numéro IFU",
      "Récupérer le RCCM et les documents officiels",
    ],
    online: true,
    tags: ["entreprise", "SARL", "création", "commerce", "IFU"],
  },
  {
    id: "permis-conduire",
    title: "Permis de conduire",
    description: "Demandez votre permis de conduire ou procédez à son renouvellement auprès des services compétents.",
    category: "transport",
    ministry: "Ministère des Transports",
    duration: "10 à 30 jours après examen",
    cost: "15 000 FCFA",
    documents: [
      "CNI en cours de validité",
      "Certificat médical d'aptitude à la conduite",
      "2 photos d'identité récentes",
      "Justificatif de paiement des frais",
    ],
    steps: [
      "S'inscrire dans une auto-école agréée",
      "Suivre la formation théorique et pratique",
      "Passer l'examen du code de la route",
      "Passer l'examen pratique de conduite",
      "Retirer le permis de conduire provisoire",
    ],
    online: false,
    tags: ["permis", "conduire", "auto-école", "examen"],
  },
  {
    id: "casier-judiciaire",
    title: "Extrait de casier judiciaire",
    description: "Obtenez votre extrait de casier judiciaire (bulletin n°3) nécessaire pour diverses démarches administratives et professionnelles.",
    category: "justice",
    ministry: "Ministère de la Justice et de la Législation",
    duration: "2 à 5 jours",
    cost: "Gratuit",
    documents: [
      "CNI ou passeport en cours de validité",
      "Acte de naissance",
      "Formulaire de demande",
    ],
    steps: [
      "Se rendre au tribunal de première instance de son ressort",
      "Remplir le formulaire de demande",
      "Présenter les pièces justificatives",
      "Récupérer le document dans le délai indiqué",
    ],
    online: false,
    tags: ["casier", "judiciaire", "justice", "bulletin"],
  },
  {
    id: "ifu",
    title: "Identifiant Fiscal Unique (IFU)",
    description: "Obtenez votre Identifiant Fiscal Unique, obligatoire pour toute activité commerciale, industrielle ou libérale au Bénin.",
    category: "fiscalite",
    ministry: "Direction Générale des Impôts",
    duration: "24 à 48 heures",
    cost: "Gratuit",
    documents: [
      "CNI ou passeport",
      "Justificatif de domicile",
      "Formulaire de demande d'IFU",
      "Pour les entreprises : RCCM",
    ],
    steps: [
      "Remplir le formulaire de demande d'IFU en ligne",
      "Joindre les pièces justificatives numérisées",
      "Soumettre la demande",
      "Recevoir l'IFU par email ou le retirer en agence",
    ],
    online: true,
    tags: ["IFU", "impôts", "fiscal", "entreprise", "DGI"],
  },
  {
    id: "assurance-maladie",
    title: "Assurance Maladie Universelle (RAMU)",
    description: "Inscrivez-vous au Régime d'Assurance Maladie Universelle pour bénéficier d'une couverture santé au Bénin.",
    category: "sante",
    ministry: "Ministère de la Santé",
    duration: "5 à 10 jours",
    cost: "Selon le revenu",
    documents: [
      "CNI ou acte de naissance",
      "Photo d'identité récente",
      "Justificatif de revenus ou d'activité",
    ],
    steps: [
      "Se rendre au centre RAMU le plus proche",
      "Remplir le formulaire d'inscription",
      "Fournir les documents requis",
      "Payer la cotisation",
      "Recevoir la carte d'assurance",
    ],
    online: false,
    tags: ["santé", "assurance", "RAMU", "couverture"],
  },
  {
    id: "aide-sociale",
    title: "Demande d'aide sociale",
    description: "Bénéficiez des programmes d'aide sociale de l'État béninois pour les personnes en situation de vulnérabilité.",
    category: "social",
    ministry: "Ministère des Affaires Sociales",
    duration: "15 à 45 jours",
    cost: "Gratuit",
    documents: [
      "CNI ou acte de naissance",
      "Justificatif de situation de vulnérabilité",
      "Certificat de résidence",
      "Formulaire de demande",
    ],
    steps: [
      "Contacter le Centre de Promotion Sociale (CPS) de votre commune",
      "Remplir le formulaire de demande",
      "Enquête sociale par un agent",
      "Évaluation du dossier",
      "Notification de la décision",
    ],
    online: false,
    tags: ["aide", "social", "vulnérabilité", "assistance"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function getServicesByCategory(category: string): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

export function searchServices(query: string): Service[] {
  const q = query.toLowerCase().trim();
  if (!q) return SERVICES;
  return SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q)) ||
      s.category.toLowerCase().includes(q)
  );
}

export function getCategoryMeta(id: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

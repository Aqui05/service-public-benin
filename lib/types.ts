export type Category =
  | "etat-civil"
  | "education"
  | "sante"
  | "entreprise"
  | "justice"
  | "transport"
  | "social"
  | "fiscalite";

export interface Service {
  id: string;
  title: string;
  description: string;
  category: Category;
  ministry: string;
  duration: string;       // délai de traitement
  cost: string;           // gratuit ou montant en FCFA
  documents: string[];    // pièces à fournir
  steps: string[];        // étapes de la démarche
  online: boolean;        // disponible en ligne
  tags: string[];
}

export interface CategoryMeta {
  id: Category;
  label: string;
  icon: string;
  color: string;
  count?: number;
}

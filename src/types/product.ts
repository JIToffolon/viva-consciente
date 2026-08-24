export type ProductFamily =
  | 'ORIGINALES'
  | 'ADAPTOGENOS'
  | 'LONGEVIDAD'
  | 'HONGOS_FUNCIONALES'
  | 'EXTRACTOS_LIQUIDOS'
  | 'MICRONUTRICION_AVANZADA';

export type ProductStatus = 'PUBLICADO' | 'VALIDAR' | 'BLOQUEADO';

export interface IngredientItem {
  name: string;
  amountPerKg?: string;
  standardization?: string;
  isPendingValidation?: boolean;
}

export interface ProductMaster {
  id: string;
  slug: string;
  name: string;
  family: ProductFamily;
  isAnchorFeatured: boolean;
  status: ProductStatus;
  presentation: string;
  functionalDescription: string;
  composition: {
    rawText?: string;
    items?: IngredientItem[];
    notes?: string;
  };
  informativeUsage: string;
  precautions: {
    general: string;
    interactions?: string[];
    specialPopulations?: string;
  };
  functionalAreas: string[];
  updatedAt: string;
  ctaProText?: string;
  pdfUrl?: string;
}

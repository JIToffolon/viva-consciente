export interface NavItem {
  label: string;
  href: string;
  iconName: 'home' | 'leaf' | 'shieldCheck' | 'messageSquare' | 'grid';
  badge?: string;
}

export interface ScreenMetadata {
  id: string;
  slug: string;
  number: number;
  category: 'INSTITUCIONAL' | 'UNIDADES_FUNCIONALES' | 'LONGEVIDAD' | 'PRO' | 'COMUNIDAD' | 'CONTACTO';
  title: string;
  badge: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  heroImage?: string;
}

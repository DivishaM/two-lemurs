export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Consistent visual systems that bring your brand to life across every touchpoint.',
    tags: ['Strategy', 'Branding', 'Guidelines'],
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Distinctive logos that give your business a clear and memorable identity.',
    tags: ['Creative', 'Identity', 'Visual'],
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Modern, conversion-focused websites built around your brand, audience and goals.',
    tags: ['UI/UX', 'Responsive', 'Conversion'],
  },
];

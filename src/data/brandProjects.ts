export interface BrandProject {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const brandProjects: BrandProject[] = [
  {
    id: 'wildcats',
    title: 'Wj Wildcats',
    description:
      'Driven by Passion. United by Team Spirit. A bold sports identity built around teamwork and competitive spirit, carried across jerseys, merchandise, tickets, and digital experiences.',
    image: './images/wildcats.png',
  },
  {
    id: 'hydrate-hq',
    title: 'Hydrate HQ',
    description:
      'Pure Hydration. Elevated Experiences. A refined brand identity built around premium water purification and everyday wellbeing, spanning logo design, stationery, apparel, vehicle graphics, campaigns, and digital experiences.',
    image: './images/hydrate.png',
  },
  {
    id: 'my-private-pharmacist',
    title: 'My Private Pharmacist',
    description:
      'Your Health. Our Priority. A clean, trustworthy healthcare identity focused on personalised care, spanning stationery, brochures, medical apparel, website visuals, and mobile experiences.',
    image: './images/pharmacist.png',
  },
  {
    id: 'baja-xpeditions',
    title: 'Baja Xpeditions',
    description:
      'Built for Adventure. Designed to Stand Out. A bold off-road identity built around adventure and exploration, spanning vehicle branding, expedition gear, apparel, stationery, and promotional visuals.',
    image: './images/xpeditions.png',
  },
];

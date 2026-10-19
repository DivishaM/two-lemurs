export interface BrandProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  link?: string;
}

export const brandProjects: BrandProject[] = [
  {
    id: 'hydrate-hq',
    title: 'Hydrate HQ',
    tagline: 'Workplace Hydration. Clear Confidence.',
    description:
      'A modern brand identity designed to position Hydrate HQ as a dependable workplace water solutions provider. A clear, confident visual approach makes the service feel accessible and professional, creating a consistent brand presence that supports recognition and helps businesses feel assured when choosing their water solutions partner.',
    image: '/images/hydrate.webp',
    link: 'https://www.hydratehq.com/',
  },
  {
    id: 'my-private-pharmacist',
    title: 'My Private Pharmacist',
    tagline: 'Professional Care. Personal Trust.',
    description:
      'A modern healthcare brand identity designed to communicate trust, professionalism and personal care. A welcoming visual approach and consistent brand presence express My Private Pharmacist’s commitment to accessible, discreet and reliable healthcare, helping people feel reassured and confident about taking the next step towards personalised support.',
    image: '/images/pharmacist.webp',
    link: 'https://www.myprivatepharmacist.co.uk/',
  },
  {
    id: 'greenwich-polo-team',
    title: 'Greenwich Polo Team',
    tagline: 'Sporting Heritage. Distinctive Presence.',
    description:
      'A refined brand identity designed to express Greenwich Polo Team’s sporting heritage and premium character. Combining a classic visual approach with a cohesive team presence, the design reinforces a sense of pride and belonging while giving the team a recognisable identity on and off the field.',
    image: '/images/Greenwich.webp',
    link: 'https://www.greenwichpoloclub.com/',
  },
];

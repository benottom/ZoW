export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  intent: string;
  cta: string;
  links: NavLink[];
}

export const primaryNav: NavGroup[] = [
  {
    label: 'Platform',
    href: '/platform',
    intent: 'Understand the product',
    cta: 'Explore Platform',
    links: [
      { label: 'Overview', href: '/platform', description: 'How the platform fits together' },
      { label: 'Architecture', href: '/platform/architecture', description: 'Simulation, cyber, mission and evidence layers' },
      { label: 'Live Scoring & Analytics', href: '/platform/scoring', description: 'How missions are measured' },
    ],
  },
  {
    label: 'Cyber Ranges',
    href: '/missions',
    intent: 'See hands-on capability',
    cta: 'Browse Missions',
    links: [
      { label: 'Drone Attack Range', href: '/ranges/attack', description: 'Red Team missions' },
      { label: 'Drone Defense Range', href: '/ranges/defense', description: 'Blue Team missions' },
      { label: 'Red vs Blue', href: '/ranges/red-vs-blue', description: 'Live multi-team exercises' },
      { label: 'Mission Library', href: '/missions', description: 'Browse the full catalog' },
    ],
  },
  {
    label: 'Training',
    href: '/training',
    intent: 'Buy learning / readiness outcomes',
    cta: 'Start Training',
    links: [
      { label: 'Learning Paths', href: '/training', description: 'Guided skill journeys' },
      { label: 'Certification', href: '/training/certification', description: 'Practical skill validation' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions/cyber-teams',
    intent: 'Map platform to buyer',
    cta: 'Book a Demo',
    links: [
      { label: 'Defense & Public Safety', href: '/solutions/defense' },
      { label: 'Critical Infrastructure', href: '/solutions/critical-infrastructure' },
      { label: 'Drone Manufacturers', href: '/solutions/manufacturers' },
      { label: 'Universities & Research', href: '/solutions/academia' },
      { label: 'Cybersecurity Teams', href: '/solutions/cyber-teams' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources/threat-library',
    intent: 'Build authority and SEO',
    cta: 'Explore Resources',
    links: [
      { label: 'Drone Threat Library', href: '/resources/threat-library' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Research', href: '/resources/research' },
      { label: 'Documentation', href: '/docs' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export const footerNav = {
  product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Mission Library', href: '/missions' },
    { label: 'Training', href: '/training' },
    { label: 'Pricing', href: '/pricing' },
  ],
  solutions: [
    { label: 'Defense & Public Safety', href: '/solutions/defense' },
    { label: 'Critical Infrastructure', href: '/solutions/critical-infrastructure' },
    { label: 'Drone Manufacturers', href: '/solutions/manufacturers' },
    { label: 'Universities & Research', href: '/solutions/academia' },
    { label: 'Cybersecurity Teams', href: '/solutions/cyber-teams' },
  ],
  resources: [
    { label: 'Threat Library', href: '/resources/threat-library' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Research', href: '/resources/research' },
    { label: 'Documentation', href: '/docs' },
  ],
  company: [
    { label: 'About', href: '/company/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
  trust: [
    { label: 'Responsible Use', href: '/company/responsible-use' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Acceptable Use', href: '/acceptable-use' },
    { label: 'Security', href: '/security' },
  ],
};

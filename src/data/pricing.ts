export interface PricingPlan {
  name: string;
  audience: string;
  priceLabel: string;
  billing: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  notes?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Explorer',
    audience: 'Individuals getting started',
    priceLabel: 'Free',
    billing: 'no card required',
    features: [
      'Limited rotating missions',
      'Community leaderboard (alias-based)',
      'Access to the Drone Threat Library',
      'Newsletter: Autonomous Security Brief',
    ],
    cta: { label: 'Start Free', href: '/signup' },
  },
  {
    name: 'Practitioner',
    audience: 'Individual practitioners',
    priceLabel: 'Early Access — from €79/mo',
    billing: 'billed monthly',
    features: [
      'Full individual mission library',
      'All learning paths',
      'Personal skill record & after-action reports',
      'Priority access to new missions',
    ],
    cta: { label: 'Start Free', href: '/signup' },
    highlighted: true,
  },
  {
    name: 'Team',
    audience: 'Cyber / SOC teams',
    priceLabel: 'Early Access — from €299/mo',
    billing: 'billed monthly, by seats',
    features: [
      'Everything in Practitioner',
      'Team missions & Red vs Blue exercises',
      'Team analytics and capability reporting',
      'Private cohorts and instructor features',
    ],
    cta: { label: 'Request Team Pricing', href: '/contact' },
  },
  {
    name: 'Academic',
    audience: 'Universities & research',
    priceLabel: 'Custom — annual license',
    billing: 'per course / site',
    features: [
      'Instructor dashboard and class cohorts',
      'Assignment and performance reporting',
      'Research sandbox applications',
      'Academic support channel',
    ],
    cta: { label: 'Request Academic Access', href: '/solutions/academia' },
  },
  {
    name: 'Enterprise',
    audience: 'Defense, critical infrastructure, OEMs',
    priceLabel: 'Custom — annual contract',
    billing: 'contact for quote',
    features: [
      'SSO (SAML / OIDC)',
      'Private tenancy or on-prem deployment',
      'Custom mission development',
      'Dedicated support',
    ],
    cta: { label: 'Book a Secure Demo', href: '/contact' },
  },
  {
    name: 'Hardware Lab',
    audience: 'Advanced controlled labs',
    priceLabel: 'Quoted per project',
    billing: 'project / deployment',
    features: [
      'Hardware-in-the-loop exercises',
      'Shielded, legally compliant environments',
      'Instructor-supervised deployment',
      'Additional rules of engagement apply',
    ],
    cta: { label: 'Discuss a Private Deployment', href: '/contact' },
    notes: 'Available only in approved environments. Additional rules of engagement and local legal requirements apply.',
  },
];

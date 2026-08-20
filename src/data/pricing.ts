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
    name: 'Academic',
    audience: 'Universities, research centers & university-affiliated organizations',
    priceLabel: 'Institutional License',
    billing: 'per course, program or site',
    features: [
      'Instructor dashboard and class cohorts',
      'Assignment and performance reporting',
      'Research sandbox for applied UAS-security work',
      'Technology-transfer pathway to sponsored research',
    ],
    cta: { label: 'Request Academic Access', href: '/solutions/academia' },
  },
  {
    name: 'Corporate',
    audience: 'Defense contractors, large enterprises & industry partners',
    priceLabel: 'Enterprise Agreement',
    billing: 'annual term, scoped to your organization',
    features: [
      'SSO (SAML / OIDC) & private tenancy or on-prem',
      'Regression-testable mission library for product-security validation',
      'Custom mission development for proprietary hardware/firmware',
      'Audit-ready reporting for supply-chain attestations',
    ],
    cta: { label: 'Discuss Product Security Use Cases', href: '/contact' },
  },
  {
    name: 'Government',
    audience: 'Ministries of Defense, military branches & government agencies',
    priceLabel: 'Contract Vehicle',
    billing: 'negotiated per engagement or program',
    features: [
      'Mission-ready scenarios matched to doctrine & ROE',
      'Private, on-prem or classified-adjacent deployment',
      'Custom mission development',
      'Dedicated support & instructor-supervised HITL labs',
    ],
    cta: { label: 'Book a Secure Demo', href: '/contact' },
  },
];

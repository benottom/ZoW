export interface SolutionPage {
  slug: string;
  title: string;
  audience: string;
  seoTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroBody: string;
  capabilities: string[];
  recommendedPackage: string;
  ctaLabel: string;
}

export const solutions: SolutionPage[] = [
  {
    slug: 'defense',
    title: 'Defense & Public Safety',
    audience: 'Ministries of Defense, military branches, and government agencies',
    seoTitle: 'Defense & Public Safety Drone Cyber Range | ZoneOfWar',
    metaDescription:
      'ZoneOfWar hands-on drone cybersecurity range for Ministries of Defense, military branches, and government agencies.',
    heroHeadline: 'Mission-ready, interoperable drone cyber readiness for defense & government.',
    heroBody:
      'Delivering mission-ready, interoperable solutions for defense and security agencies. Prepare teams for cyber and cyber-physical risks involving unmanned systems, with private exercises, instructor control, after-action evidence and custom mission development.',
    capabilities: [
      'Run role-based practical missions',
      'Measure team performance',
      'Repeat the same scenario after remediation',
      'Use private cohorts and instructor controls',
      'Request custom scenario development',
    ],
    recommendedPackage:
      'Team workspace + mission library + analytics + instructor controls. Enterprise/private deployment and custom content as required.',
    ctaLabel: 'Book a Secure Demo',
  },
  {
    slug: 'critical-infrastructure',
    title: 'Critical Infrastructure',
    audience: 'Energy, ports, telecom, logistics, airports',
    seoTitle: 'Critical Infrastructure Drone Cyber Range | ZoneOfWar',
    metaDescription:
      'ZoneOfWar hands-on drone cybersecurity range for energy, ports, telecom, logistics, airports.',
    heroHeadline: 'Drone cyber readiness for critical infrastructure.',
    heroBody:
      'Train security teams to understand both friendly-drone dependencies and malicious or compromised UAS risk around critical operations. Focus on detection, incident coordination and resilient operations.',
    capabilities: [
      'Run role-based practical missions',
      'Measure team performance',
      'Repeat the same scenario after remediation',
      'Use private cohorts and instructor controls',
      'Request custom scenario development',
    ],
    recommendedPackage:
      'Team workspace + mission library + analytics + instructor controls. Enterprise/private deployment and custom content as required.',
    ctaLabel: 'Plan a Team Exercise',
  },
  {
    slug: 'manufacturers',
    title: 'Drone Manufacturers',
    audience: 'Defense contractors, large enterprises, and industry partners in the defense supply chain',
    seoTitle: 'Drone Manufacturers Drone Cyber Range | ZoneOfWar',
    metaDescription:
      'ZoneOfWar hands-on drone cybersecurity range for defense contractors, large enterprises, and industry partners in the defense supply chain.',
    heroHeadline: 'Accelerating defense innovation and compliance for industry partners.',
    heroBody:
      'Accelerating defense innovation and compliance for prime contractors and industry partners. Give product-security and engineering teams a repeatable environment for security validation, regression exercises and secure-design training across the UAS stack.',
    capabilities: [
      'Run role-based practical missions',
      'Measure team performance',
      'Repeat the same scenario after remediation',
      'Use private cohorts and instructor controls',
      'Request custom scenario development',
    ],
    recommendedPackage:
      'Team workspace + mission library + analytics + instructor controls. Enterprise/private deployment and custom content as required.',
    ctaLabel: 'Discuss Product Security Use Cases',
  },
  {
    slug: 'academia',
    title: 'Universities & Research',
    audience: 'Academic institutions, research centers, and university-affiliated organizations',
    seoTitle: 'Universities & Research Drone Cyber Range | ZoneOfWar',
    metaDescription:
      'ZoneOfWar hands-on drone cybersecurity range for academic institutions, research centers, and university-affiliated organizations.',
    heroHeadline: 'Enabling secure, collaborative defense research for academic consortia.',
    heroBody:
      'Enabling secure, collaborative defense research and technology transfer for academic consortia. Provide students and researchers with resettable UAS cyber labs, instructor-led exercises, class cohorts and measurable practical assignments.',
    capabilities: [
      'Run role-based practical missions',
      'Measure team performance',
      'Repeat the same scenario after remediation',
      'Use private cohorts and instructor controls',
      'Request custom scenario development',
    ],
    recommendedPackage:
      'Team workspace + mission library + analytics + instructor controls. Enterprise/private deployment and custom content as required.',
    ctaLabel: 'Request Academic Access',
  },
  {
    slug: 'cyber-teams',
    title: 'Cybersecurity Teams',
    audience: 'SOC, CERT, pentest, IR and threat teams',
    seoTitle: 'Cybersecurity Teams Drone Cyber Range | ZoneOfWar',
    metaDescription:
      'ZoneOfWar hands-on drone cybersecurity range for SOC, CERT, pentest, IR and threat teams.',
    heroHeadline: 'Drone cyber readiness for cybersecurity teams.',
    heroBody:
      'Extend Red Team, Blue Team and incident-response skills from traditional IT into cyber-physical and autonomous systems.',
    capabilities: [
      'Run role-based practical missions',
      'Measure team performance',
      'Repeat the same scenario after remediation',
      'Use private cohorts and instructor controls',
      'Request custom scenario development',
    ],
    recommendedPackage:
      'Team workspace + mission library + analytics + instructor controls. Enterprise/private deployment and custom content as required.',
    ctaLabel: 'Start a Team Pilot',
  },
];

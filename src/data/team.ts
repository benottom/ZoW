export interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Ben Ottoman',
    role: 'PhD Candidate, University of Vaasa',
    shortBio: 'Cyber resilience, cybersecurity governance and security assurance.',
  },
  {
    name: 'Dr. Tenager Mekonnen',
    role: 'PhD in Communications Engineering, University of Oulu, Center for Wireless Communications',
    shortBio: 'Expertise in communications engineering and IoT resource management.',
  },
  {
    name: 'Mohamed Alasad',
    role: 'Full-stack Developer',
    shortBio: 'Platform and web application engineering.',
  },
];

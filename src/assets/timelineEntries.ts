type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  location?: string;
  type: 'Education' | 'Career' | 'Internship';
  description: string;
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'lsu-undergrad',
    period: '2020 – 2024',
    title: 'B.S. in Computer Science',
    org: 'Louisiana State University',
    location: 'Baton Rouge, LA',
    type: 'Education',
    description:
      'Focused on software engineering while building projects in web, mobile, and data tooling. Picked up a mathematics minor and interned along the way.',
  },
  {
    id: 'intern-exodus',
    period: '2022 – 2023',
    title: 'Front-End Development Intern',
    org: 'Exodus (Decentraland / Web3 Game)',
    location: 'Remote',
    type: 'Internship',
    description:
      'Part-time internship during my LSU studies, implementing in-game UI and 2D interfaces using TypeScript and custom SDK.',
  },
  {
    id: 'early-professional',
    period: '2023 – 2024',
    title: 'Software Engineering Intern',
    org: 'Applied Research Associates Inc.',
    location: 'Baton Rouge, LA',
    type: 'Internship',
    description:
      'Shipped full-stack web applications with a professional team of software engineers in the federal contracting space.',
  },
  {
    id: 'current-role',
    period: '2024 – Present',
    title: 'Software Engineer',
    org: 'Applied Research Associates Inc.',
    location: 'Baton Rouge, LA',
    type: 'Career',
    description:
      'Promotion to full-time software engineer: solidified my spot in the software engineering field. Continued to contribute to multi-million dollar contracts with a focus on reliability, performance, and developer experience.',
  },
] satisfies TimelineEntry[];

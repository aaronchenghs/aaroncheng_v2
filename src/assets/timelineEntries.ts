type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  location?: string;
  type: 'Education' | 'Work' | 'Other';
  description: string;
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'current-role',
    period: '2024 – Present',
    title: 'Software Engineer',
    org: 'Federal-contracting environment',
    location: 'Baton Rouge, LA',
    type: 'Work',
    description:
      'Building production React + .NET applications with a focus on reliability, performance, and developer experience.',
  },
  {
    id: 'early-professional',
    period: '2023 – 2024',
    title: 'Software Developer',
    org: 'Freelance & academic projects',
    location: 'Baton Rouge, LA',
    type: 'Work',
    description:
      'Shipped React / TypeScript apps, Discord bots, and data tools while refining my design and UX practices.',
  },
  {
    id: 'intern-exodus',
    period: '2022 – 2023',
    title: 'Front-End Developer Intern',
    org: 'Exodus (Decentraland / Web3 Game)',
    location: 'Remote',
    type: 'Work',
    description:
      'Part-time internship during my LSU studies, implementing in-game UI and 2D interfaces using TypeScript and the Decentraland SDK.',
  },
  {
    id: 'lsu-undergrad',
    period: '2020 – 2024',
    title: 'B.S. in Computer Science',
    org: 'Louisiana State University',
    location: 'Baton Rouge, LA',
    type: 'Education',
    description:
      'Focused on software engineering and systems while building projects in web, mobile, and data tooling. Interned remotely at Exodus along the way.',
  },
] satisfies TimelineEntry[];

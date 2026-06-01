type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  location?: string;
  type: 'Education' | 'Career' | 'Internship';
  description: string;
  icon: string;
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'lsu-undergrad',
    period: 'Aug 2020 - May 2024',
    title: 'B.S. in Computer Science',
    org: 'Louisiana State University and A&M College',
    location: 'Baton Rouge, LA',
    type: 'Education',
    icon: 'https://img.icons8.com/fluency/48/graduation-cap.png',
    description:
      "Studied computer science with a software engineering focus, picked up a math minor, and spent a lot of time building web, mobile, and data projects. Graduated Cum Laude with Dean's and President's List recognition along the way.",
  },
  {
    id: 'intern-exodus',
    period: 'May 2022 - Jan 2023',
    title: 'Front-End Development Intern',
    org: 'Exodus Foundation',
    location: 'Remote',
    type: 'Internship',
    icon: 'https://img.icons8.com/fluency/48/briefcase.png',
    description:
      'Got early startup experience building TypeScript UI for a browser-based 3D platform, plus a React single-page app for product updates and roadmap content. Worked across features, bug fixes, and a little Python/Flask API glue.',
  },
  {
    id: 'ara-software-engineer',
    period: 'Jan 2023 - Apr 2026',
    title: 'Junior Software Engineer',
    org: 'Applied Research Associates',
    location: 'Baton Rouge, LA',
    type: 'Career',
    icon: 'https://img.icons8.com/fluency/48/rocket.png',
    description:
      'Started my career working on Army and Navy software for logistics, document management, and lab workflows. Most days were a mix of React + TypeScript UI, REST API work, C#/.NET, Python/FastAPI, test automation, AWS troubleshooting, and writing docs that future engineers would not hate.',
  },
  {
    id: 'current-role',
    period: 'Apr 2026 - Present',
    title: 'Full-Stack Software Engineer',
    org: 'Juno Health (DSS, Inc.)',
    location: 'Remote',
    type: 'Career',
    icon: 'https://img.icons8.com/fluency/48/medical-doctor.png',
    description:
      'Now building healthcare software for pharmacists, nurses, and clinical staff across large EHR platforms. I work with Angular, Bootstrap, SCSS, Jest, C#/.NET, Dapper, T-SQL, and SQL Server, while using Claude as a planning and review partner without handing over the steering wheel.',
  },
] satisfies TimelineEntry[];

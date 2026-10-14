export const profile = {
  name: 'Balakrishnan A',
  title: 'Full-Stack .NET Developer',
  tagline: 'React · Azure · C# · .NET Core · AI/GenAI',
  location: 'Hyderabad, India',
  email: 'Balakrishnan2k00@gmail.com',
  phone: '9550012735',
  github: 'https://github.com/balakrishnan2k00',
  links: 'https://linktr.ee/balakrishnan2k',
  summary:
    'Full-Stack Developer with 4+ years of experience building, modernizing, and supporting enterprise applications in regulated financial and cloud environments. Strong expertise in C#, .NET Core, Web API, React.js, JavaScript, SQL Server, Azure, Python, FastAPI, and CI/CD. Experienced in legacy modernization, REST APIs, regulatory reporting, ETL pipelines, application security, and AI/GenAI-enabled solutions.',
}

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    accent: '#6b8f2e',
    items: [
      'React.js',
      'JavaScript',
      'React Hooks',
      'Context API',
      'React Query',
      'HTML5',
      'CSS/SCSS',
      'Figma',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    accent: '#2563eb',
    items: [
      'C#',
      '.NET Core',
      'ASP.NET',
      'Web API',
      'EF Core',
      'Python',
      'FastAPI',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Azure',
    accent: '#0891b2',
    items: [
      'Azure Functions',
      'App Services',
      'Cosmos DB',
      'Key Vault',
      'Service Bus',
      'Azure DevOps',
    ],
  },
  {
    id: 'ai',
    title: 'AI / GenAI',
    accent: '#7c3aed',
    items: [
      'Azure OpenAI',
      'Prompt Engineering',
      'LLM Orchestration',
      'Agent Frameworks',
    ],
  },
  {
    id: 'data',
    title: 'Data & DevOps',
    accent: '#c2410c',
    items: [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Microsoft Fabric',
      'Tableau',
      'Git',
      'CI/CD',
      'Vite',
    ],
  },
]

export const experience = [
  {
    company: 'Hexaware Technologies',
    role: 'Software Engineer — Full-Stack .NET Developer',
    period: 'Jun 2022 – Present',
    client: 'Royal Bank of Canada (RBC) — Regulatory Reporting',
    highlights: [
      'Enterprise full-stack apps with React.js, .NET Core, Web API, C#, and SQL in a regulated environment.',
      'Modernized legacy ASP.NET toward scalable React.js and .NET Core architecture.',
      'Reporting and workflow solutions with ETL, Tableau, and batch automation.',
      'Cloud solutions on Azure Functions, App Services, Cosmos DB, Key Vault, and Service Bus.',
      'CI/CD pipelines, Git workflows, and deployment automation.',
      'AI-driven development with Azure OpenAI, Python, FastAPI, and data pipelines.',
      'Security: encryption, tokenization, data masking, and vulnerability remediation.',
      'Led small teams, mentored developers, and delivered in Agile/JIRA environments.',
    ],
  },
]

export const projects = [
  {
    name: 'Talent Matching Platform',
    period: 'Feb 2026 – Jul 2026',
    description:
      'AI-driven talent screening and matching platform aligning candidate profiles with job allocation requirements.',
    bullets: [
      'Led production data onboarding and backend workflows.',
      'Python, FastAPI, and Azure Functions with Azure OpenAI screening.',
      'Cosmos DB for candidate and job-request data; Microsoft Fabric Lakehouse pipelines.',
      'Test automation and end-to-end pipeline validation.',
    ],
    tech: [
      'Python',
      'FastAPI',
      'Azure Functions',
      'Azure OpenAI',
      'Cosmos DB',
      'Microsoft Fabric',
    ],
  },
  {
    name: 'FR Y-14 Regulatory Reporting Portal',
    period: 'May 2024 – Jan 2026',
    description:
      'Enterprise regulatory reporting portal supporting financial reporting workflows.',
    bullets: [
      'Responsive, reusable React.js UI from Figma designs.',
      'REST API integration for regulatory reporting workflows.',
      'Modernization from legacy stack to React.js and .NET Core.',
      'Data-driven views and monitoring dashboards.',
    ],
    tech: ['React.js', 'JavaScript', 'REST APIs', 'Figma', 'JIRA', 'Agile'],
  },
  {
    name: 'Tableau Dashboard PPT Reports',
    period: 'Apr 2023 – Jun 2023',
    description:
      'Automated reporting replacing manual Tableau-to-PowerPoint processes.',
    bullets: [
      'C#/.NET and Python framework with scheduled .NET jobs.',
      'Automated Tableau image extraction and PowerPoint generation.',
      'SQL optimization, audit logging, notifications, and error recovery.',
    ],
    tech: ['C#', '.NET', 'Python', 'Tableau', 'SQL', 'PowerPoint Automation'],
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

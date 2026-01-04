export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
}

export const mockJobs: Job[] = [
  {
    id: "1",
    slug: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Bangkok (Hybrid)",
    type: "Full-time",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    id: "2",
    slug: "backend-engineer-go",
    title: "Backend Engineer (Go)",
    department: "Engineering",
    location: "Bangkok (Remote)",
    type: "Full-time",
    tags: ["Go", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    id: "3",
    slug: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Bangkok (Hybrid)",
    type: "Full-time",
    tags: ["Agile", "Scrum", "Strategy"],
  },
  {
    id: "4",
    slug: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Bangkok (Hybrid)",
    type: "Full-time",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: "5",
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    department: "Engineering",
    location: "Bangkok (Remote)",
    type: "Contract",
    tags: ["Cypress", "Selenium", "JavaScript"],
  },
];

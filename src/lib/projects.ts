
export type Project = {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed";
  client: string;
  dueDate: string;
  teamMembers: string[];
};

export const projects: Project[] = [
  {
    id: "proj-001",
    name: "Summer Brand Campaign",
    description: "Develop a summer marketing campaign.",
    status: "active",
    client: "Nike",
    dueDate: "2026-11-15",
    teamMembers: ["Marcus", "Jasmine", "David"],
  }
  ,
  {
    id: "proj-002",
    name: "Documentary Film",
    description: "Produce a short documentary about Detroit.",
    status: "active",
    client: "Detroit Arts",
    dueDate: "2026-12-20",
    teamMembers: ["Andre", "Monica"],
  },
  {
    id: "proj-003",
    name: "Website Redesign",
    description: "Redesign a creative agency website.",
    status: "completed",
    client: "Creative House",
    dueDate: "2026-09-10",
    teamMembers: ["Sarah", "James"],
  },
  {
    id: "proj-004",
    name: "Music Video Production",
    description: "Produce a music video for an R&B artist.",
    status: "active",
    client: "Independent Artist",
    dueDate: "2026-11-30",
    teamMembers: ["Marcus", "Andre"],
  },
  {
    id: "proj-005",
    name: "Social Media Campaign",
    description: "Create 30 days of social media content.",
    status: "completed",
    client: "Local Coffee Co.",
    dueDate: "2026-08-15",
    teamMembers: ["Jasmine", "Monica"],
  },
  {
    id: "proj-006",
    name: "Podcast Launch",
    description: "Develop branding and promotional assets.",
    status: "active",
    client: "Culture Talks",
    dueDate: "2026-12-10",
    teamMembers: ["David", "Sarah"],
  },
  {
    id: "proj-007",
    name: "Product Photography",
    description: "Create product images for an online store.",
    status: "completed",
    client: "Urban Essentials",
    dueDate: "2026-07-25",
    teamMembers: ["James", "Andre"],
  },
  {
    id: "proj-008",
    name: "Short Film Festival",
    description: "Plan and promote a local film festival.",
    status: "active",
    client: "Michigan Film Collective",
    dueDate: "2027-02-15",
    teamMembers: ["Monica", "Marcus", "Sarah"],
  },
];

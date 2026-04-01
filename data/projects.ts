export type ProjectTag =
  | "Next.js"
  | "Next.js + React"
  | "TypeScript"
  | "Node.js"
  | "MongoDB"
  | "Redis"
  | "Tailwind"
  | "GraphQL"
  | "tRPC"
  | "Prisma"
  | "Go"
  | "AWS"
  | "Docker"
  | "Stripe"
  | "WebSocket"
  | "OpenAI"
  | "Vercel"
  | "Drizzle"
  | "Paystack"
  | "Drizzle ORM"
  | "PostgreSQL"
  | "Supabase"
  | "Better-Auth"
  | "Turborepo"
  | "Tailwind CSS"
  | "shadcn/ui";

export type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  tags: ProjectTag[];
  imageSrc: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  status: "live" | "archived" | "in-progress";
  accentColor: string; // CSS color for card accent stripe
};

export const projects: Project[] = [
  {
    id: "meridian",
    title: "Easylife",
    description:
      "Multi-vendor e-commerce platform that enables local vendors to create online stores, manage inventory, and sell products while the platform handles payments and delivery logistics.The system was built with a scalable Next.js architecture, real-time backend integrations, and secure payment and order management workflows to support marketplace growth.",
    details:
      "Full-stack Next.js Web app, Redis for rate limiting, Paystack for payments.",
    tags: ["Next.js", "TypeScript", "MongoDB","Paystack", "Redis",],
    imageSrc: "/easylife2.png",
    imageAlt: "Easylife — multi-vendor e-commerce platform",
    liveUrl: "https://easylife.com.ng",
    githubUrl: "https://github.com/kingstech001/easylife_market",
    featured: true,
    year: 2026,
    status: "live",
    accentColor: "#c9622f",
  },
  {
  id: "devlinks",
  title: "DevLinks",
  description:
    "A platform for developers to showcase their projects, share social media and portfolio links, and connect with the tech community.",

  details:
    "Built with Next.js App Router and TypeScript in a Turborepo monorepo. It uses tRPC for type-safe APIs, Drizzle ORM with PostgreSQL hosted on Supabase, and Better-Auth for secure authentication. The UI is built with shadcn/ui and Tailwind CSS, allowing developers to create modern, responsive profiles quickly.",

  tags: [
    "Next.js + React",
    "TypeScript",
    "tRPC",
    "Drizzle ORM",
    "PostgreSQL",
    "Supabase",
    "Better-Auth",
    "Turborepo",
    "Tailwind CSS",
    "shadcn/ui"
  ],

  imageSrc: "/devlinks.png",
  imageAlt: "DevLinks — developer portfolio platform",
  liveUrl: "https://devlinks-web.vercel.app",
  githubUrl: "https://github.com/kingstech001/devlinks",
  featured: true,
  year: 2026,
  status: "live",
  accentColor: "#b89a5a",
},
  // {
  //   id: "clearcast",
  //   title: "Clearcast",
  //   description:
  //     "AI podcast transcription and editing studio. Upload audio, get searchable transcripts, speaker-diarised chapters, and one-click show notes.",
  //   details:
  //     "Next.js frontend, Whisper API integration, background job queue with Redis + BullMQ. Supports MP3, MP4, WAV up to 4 hours.",
  //   tags: ["Next.js", "TypeScript", "Node.js", "Redis", "OpenAI", "AWS"],
  //   imageSrc: "/images/projects/clearcast.jpg",
  //   imageAlt: "Clearcast — AI podcast studio",
  //   liveUrl: "https://clearcast.fm",
  //   githubUrl: "https://github.com/jordanreeves/clearcast",
  //   featured: true,
  //   year: 2023,
  //   status: "live",
  //   accentColor: "#3d7a56",
  // },
  // {
  //   id: "shelf",
  //   title: "Shelf",
  //   description:
  //     "Open-source reading list manager and book discovery tool. Import from Goodreads, track progress, and get ML-based recommendations.",
  //   details:
  //     "React SPA, GraphQL API, Prisma + MongoDB. Deployed to Fly.io. 3 k+ GitHub stars, actively maintained.",
  //   tags: ["React", "TypeScript", "GraphQL", "Prisma", "MongoDB", "Docker"],
  //   imageSrc: "/images/projects/shelf.jpg",
  //   imageAlt: "Shelf — reading list manager",
  //   githubUrl: "https://github.com/jordanreeves/shelf",
  //   featured: false,
  //   year: 2023,
  //   status: "live",
  //   accentColor: "#7c5cbf",
  // },
  // {
  //   id: "patchwork",
  //   title: "Patchwork UI",
  //   description:
  //     "An accessible, un-opinionated React component library — fully typed, tree-shakeable, and built on Radix primitives with zero runtime CSS.",
  //   details:
  //     "Rollup + TypeScript build. Storybook docs. WCAG 2.2 AA certified. Ships CSS Modules with optional Tailwind preset.",
  //   tags: ["React", "TypeScript", "Tailwind"],
  //   imageSrc: "/images/projects/patchwork.jpg",
  //   imageAlt: "Patchwork UI — React component library",
  //   liveUrl: "https://patchworkui.dev",
  //   githubUrl: "https://github.com/jordanreeves/patchwork-ui",
  //   featured: false,
  //   year: 2022,
  //   status: "live",
  //   accentColor: "#c9622f",
  // },
  // {
  //   id: "budget-relay",
  //   title: "Budget Relay",
  //   description:
  //     "Personal finance dashboard that aggregates bank accounts via Plaid, categorises transactions with ML, and generates weekly spending reports.",
  //   details:
  //     "Next.js, Plaid API, Python micro-service for ML categorisation, Tailwind charts. Processes $2M+ in transactions for beta users.",
  //   tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
  //   imageSrc: "/images/projects/budget-relay.jpg",
  //   imageAlt: "Budget Relay — personal finance dashboard",
  //   liveUrl: "https://budgetrelay.app",
  //   featured: false,
  //   year: 2024,
  //   status: "in-progress",
  //   accentColor: "#b89a5a",
  // },
];
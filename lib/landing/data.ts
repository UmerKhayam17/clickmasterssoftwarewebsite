import type { LucideIcon } from "lucide-react";
import { Mail, Share2 } from "lucide-react";

import { siteBrand } from "@/lib/landing/brand";
import { contactPath } from "@/lib/landing/constants";

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: contactPath },
] as const;

export const navCtaLabel = "Get a Free Quote";

export const contactInfo = {
  email: siteBrand.email,
  responseTime: "Within 24 hours",
  hours: "Monday – Friday, 9:00 – 18:00 (PKT)",
  location: siteBrand.location,
} as const;

export const homeHero = {
  eyebrow: "Software Development Company in Islamabad, Pakistan",
  headlineBefore: "We build software at the",
  headlineEmphasis: "edge of results",
  subtext:
    "Next Software Development is a full-service software company based in Islamabad, Pakistan. We design and build custom software, web applications, mobile apps, CRM systems and ERP platforms for startups, growing businesses and enterprises across Pakistan and globally.",
  primaryCta: "Start Your Project",
  secondaryCta: "See Our Work",
  secondaryHref: "#projects",
} as const;

export const clientsSection = {
  label: "Trusted by businesses across Pakistan, UK & UAE",
  fallbackText:
    "Worked with companies in retail, healthcare, logistics, finance and education.",
} as const;

export type ContactSelectOption = {
  value: string;
  label: string;
};

export const contactProjectTypes: ContactSelectOption[] = [
  { value: "custom-software", label: "Custom software / product" },
  { value: "erp", label: "ERP system" },
  { value: "crm", label: "CRM platform" },
  { value: "ai-agent", label: "AI agent / automation" },
  { value: "mobile-app", label: "Mobile app" },
  { value: "ecommerce", label: "E-commerce platform" },
  { value: "integration", label: "Integration / API work" },
  { value: "other", label: "Other" },
];

export const contactBudgetRanges: ContactSelectOption[] = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-250k", label: "$100,000 – $250,000" },
  { value: "250k-plus", label: "$250,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const contactTimelineOptions: ContactSelectOption[] = [
  { value: "asap", label: "ASAP / within 1 month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible / exploring" },
];

export type ContactFormData = {
  name: string;
  email: string;
  contact: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=75",
    alt: "Laptop with code on a bright desk",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=480&q=75",
    alt: "Developer working at a monitor",
    width: 480,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=75",
    alt: "Analytics dashboard on screen",
    width: 480,
    height: 360,
  },
];

export type ServiceSubItem = { label: string; slug: string; href: string };
export type ServiceCategory = {
  label: string;
  slug: string;
  href: string;
  description?: string;
  items: ServiceSubItem[];
};

import { getServiceNavCategories } from "@/lib/content";

/** Nav dropdown auto-generated from lib/content/categories.data.ts */
export const serviceCategories = getServiceNavCategories();

export const processSteps = [
  {
    step: "1",
    title: "Discover",
    description:
      "We start every engagement with deep listening. We learn your business, your users, your constraints and your goals and produce a specification document that everyone agrees on before anything is built.",
  },
  {
    step: "2",
    title: "Define",
    description:
      "Architecture, technology choices, project milestones, timelines and fixed pricing are all confirmed in writing before development starts. No scope creep. No surprises.",
  },
  {
    step: "3",
    title: "Build",
    description:
      "Our in-house team in Islamabad builds in 2-week agile sprints. You receive a working, testable build every fortnight. Progress is always visible and feedback is always welcome.",
  },
  {
    step: "4",
    title: "Launch",
    description:
      "We deploy, configure monitoring, run final QA across all environments and hand over full documentation. Then we stick around with a 30-day warranty and optional ongoing support.",
  },
];

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "99.7%", label: "On-time delivery" },
  { value: "24", label: "In-house experts" },
];

export const aboutSection = {
  teamLink: "/about#team",
  teamCta: "Meet our team",
  paragraphs: [
    "Next Software Development is not a one-project agency. We are a dedicated software company based in Islamabad that builds long-term technology partnerships. Our clients come back to us not just for one app or one website, but as their permanent technology team. We are fast, honest and obsessively focused on quality. We take full ownership of every project from the first line of code to the last deployment, and we are still here when you need us six months after launch.",
  ],
  values: [
    {
      title: "Client First",
      description:
        "Every decision we make is measured against one question: does this serve the client's goal? Your success is our only metric. We do not cut corners, recommend unnecessary features or inflate timelines.",
    },
    {
      title: "Craft in Use",
      description:
        "Beautiful software is software that works. We obsess over the details — performance, usability, reliability — because the best technology is the kind your users never have to think about.",
    },
    {
      title: "Your Ownership",
      description:
        "You own everything we build. Every line of code, every design file, every database. We sign NDAs, transfer full intellectual property rights and never hold your project hostage.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75",
    alt: "Team collaborating in a bright studio space",
    width: 1000,
    height: 700,
  },
};

export type Technology = {
  name: string;
  color: string;
};

export type TechStackTab = {
  id: string;
  label: string;
  items: string[];
};

export const techStackIntro =
  "Proven technologies chosen for performance, scalability and long-term maintainability not trend-chasing.";

export const techStackTabs: TechStackTab[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["Next.js", "React.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Python", "Laravel", "Django", ".NET"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "database",
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Vercel"],
  },
  {
    id: "devops",
    label: "DevOps",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    id: "ai",
    label: "AI & ML",
    items: ["OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"],
  },
];

/** @deprecated Used only if legacy stack UI is restored */
export type TechStackCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "peach" | "navy" | "cream";
  technologies: Technology[];
};

export const techStackCategories: TechStackCategory[] = [];
export const allTechnologies: (Technology & { category: string })[] = [];

export type Client = {
  slug: string;
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { slug: "meridian-bank", name: "Meridian Bank", logo: "/clients/meridian-bank.svg" },
  { slug: "northline-health", name: "Northline Health", logo: "/clients/northline-health.svg" },
  { slug: "cargo-pulse", name: "CargoPulse", logo: "/clients/cargo-pulse.svg" },
  { slug: "ledgerly", name: "Ledgerly", logo: "/clients/ledgerly.svg" },
  { slug: "aurora-retail", name: "Aurora Retail", logo: "/clients/aurora-retail.svg" },
  { slug: "vela-analytics", name: "Vela Analytics", logo: "/clients/vela-analytics.svg" },
  { slug: "harbor-mutual", name: "Harbor Mutual", logo: "/clients/harbor-mutual.svg" },
  { slug: "prism-edtech", name: "Prism EdTech", logo: "/clients/prism-edtech.svg" },
];

export const projects = [
  {
    slug: "lahore-crm",
    title: "Lahore Sales CRM",
    category: "CRM Development · Pakistan",
    description:
      "A fully custom CRM built for a Lahore-based sales team replacing three disconnected tools with one unified platform.",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75",
      alt: "CRM dashboard for sales team",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "uae-healthcare",
    title: "UAE Clinic Platform",
    category: "Healthcare Software · UAE",
    description:
      "A patient management and appointment booking system serving three clinics across the UAE, built on Next.js and Node.js.",
    image: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=75",
      alt: "Healthcare appointment software",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "pk-marketplace",
    title: "Pakistan Marketplace",
    category: "E-Commerce · Pakistan",
    description:
      "A multi-vendor marketplace with JazzCash and Easypaisa integration handling over 500 daily transactions within three weeks of launch.",
    image: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=75",
      alt: "E-commerce marketplace interface",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "islamabad-erp",
    title: "Islamabad Manufacturing ERP",
    category: "ERP Development · Pakistan",
    description:
      "A custom ERP replacing five spreadsheets for an Islamabad-based manufacturer cutting monthly reporting time from two days to two hours.",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=75",
      alt: "ERP analytics and reporting",
      width: 1200,
      height: 750,
    },
  },
];

export const teamIntro =
  "We are a tight-knit team of engineers, designers and strategists based in Islamabad, Pakistan. Small enough to care about every project. Experienced enough to handle anything from a startup MVP to an enterprise ERP. Every person on this team has been chosen for craft, communication and character.";

export const teamMembers = [
  {
    name: "Usman Tariq",
    role: "Lead Engineer",
    bio: "Full-stack engineer with 7 years building production systems in Node.js and React.",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Usman Tariq",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Sara Malik",
    role: "Head of Design",
    bio: "UI/UX designer with a background in product design for SaaS companies in the UK and Pakistan.",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Sara Malik",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Ali Hassan",
    role: "Mobile Developer",
    bio: "React Native specialist who has shipped 12 apps to the App Store and Play Store.",
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Ali Hassan",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Zainab Raza",
    role: "Project Manager",
    bio: "Certified Scrum Master keeping every project on time, on budget and well-communicated.",
    image: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Zainab Raza",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Hamza Khan",
    role: "Backend Engineer",
    bio: "Python and Laravel expert with deep experience in ERP and CRM system architecture.",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Hamza Khan",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Aisha Noor",
    role: "QA Lead",
    bio: "Manual and automated testing specialist who finds every bug before your users do.",
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Aisha Noor",
      width: 600,
      height: 600,
    },
  },
];

export const testimonials = [
  {
    quote:
      "We came to Next Software Development with a rough idea for a CRM and left with a product our entire sales team uses every single day. They were honest about what was possible, fast in delivery and thorough in testing. Exactly the software company we needed.",
    author: "Saqib Shah",
    role: "CEO, Retail Group · Lahore, Pakistan",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&q=75",
      alt: "Saqib Shah",
      width: 200,
      height: 200,
    },
  },
  {
    quote:
      "As someone who has worked with software agencies in London, Dubai and Karachi Next Software Development is right up there with the best. Their Islamabad team communicates brilliantly, ships on time and the code quality is excellent.",
    author: "Marcus Webb",
    role: "CTO, SaaS Startup · London, UK",
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=75",
      alt: "Marcus Webb",
      width: 200,
      height: 200,
    },
  },
  {
    quote:
      "Our e-commerce platform was a mess before Next Software Development rebuilt it. Within six weeks we had a fast, clean store with proper JazzCash integration. Our conversion rate doubled. I refer them to every business owner I know in Pakistan.",
    author: "Zara Khan",
    role: "Founder, Fashion Brand · Karachi, Pakistan",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=96&q=75",
      alt: "Zara Khan",
      width: 200,
      height: 200,
    },
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: ImageAsset;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choose-software-development-company-pakistan",
    title: "How to Choose the Right Software Development Company in Pakistan",
    excerpt:
      "There are hundreds of agencies offering software development services across Pakistan. Here is the honest framework we recommend for evaluating any software company including us.",
    date: "May 12, 2026",
    readTime: "8 min",
    category: "Software Development",
    image: {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=640&q=75",
      alt: "Team planning software project",
      width: 800,
      height: 500,
    },
    body: [
      "Choosing a software development company in Pakistan is not about picking the lowest quote or the flashiest portfolio. It is about finding a partner who will still answer the phone six months after launch.",
      "Start with delivery proof: case studies with measurable outcomes, references you can call, and code you can inspect if you have a technical advisor. Ask how they handle scope changes, who owns the IP, and what happens when timelines slip.",
      "Look for a team that writes specifications before coding, demos working software every two weeks, and documents handoff. A good software company in Islamabad should overlap with your timezone if you are in the UK or UAE and communicate in plain language.",
      "Finally, run a small paid discovery phase before committing to a six-figure build. The best firms will encourage that. It protects both sides and surfaces fit early.",
    ],
  },
  {
    slug: "discovery-structure-prevents-problems",
    title: "A little structure now prevents a lot of problems later",
    excerpt:
      "The most expensive software projects we have ever seen were not the complex ones. They were simple projects that skipped discovery. Here is what a proper discovery phase actually looks like.",
    date: "Apr 28, 2026",
    readTime: "6 min",
    category: "Product Strategy",
    image: {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&q=75",
      alt: "Product discovery workshop",
      width: 800,
      height: 500,
    },
    body: [
      "Discovery is not a sales exercise. It is a short, structured phase where we map users, workflows, integrations, risks and success metrics then agree on a fixed scope and price before build.",
      "A proper discovery deliverable includes user stories, a technical architecture sketch, milestone plan, and explicit out-of-scope list. Stakeholders sign off so there is one shared truth.",
      "Skipping discovery feels faster until rework piles up: wrong database choices, missing compliance requirements, or features nobody actually uses. That is when budgets blow past PKR estimates and trust erodes.",
      "Whether you work with Next Software Development or another firm, invest in discovery. It is the cheapest insurance on any custom software project.",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  tag: string;
  column: "left" | "right";
};

export const faqIntro =
  "Everything you need to know before starting a project with us. Still have questions? We're happy to walk you through everything on a free call.";

export const faqs: FaqItem[] = [
  {
    column: "left",
    tag: "Overview",
    question: "What does a software development company do?",
    answer:
      "A software development company designs, builds, tests, and maintains custom software products tailored to your specific business needs. This includes web applications, mobile apps, enterprise systems, SaaS platforms, APIs, and more. Unlike buying off-the-shelf software, we build exactly what your business requires from the ground up.",
  },
  {
    column: "left",
    tag: "Pricing",
    question: "How much does it cost to hire a software development company?",
    answer:
      "Software development costs vary widely based on project scope, complexity, and the team you hire. As a Pakistan-based software development company, we offer highly competitive rates compared to US or UK firms — typically 40–60% lower for the same quality of work. We provide a detailed, transparent quote after a free discovery call. Projects range from PKR 150,000 for a simple MVP to PKR 3,500,000+ for enterprise platforms.",
  },
  {
    column: "left",
    tag: "Timeline",
    question: "How long does it take to build custom software?",
    answer:
      "Timelines depend on scope. A simple web app or MVP can be built in 6-10 weeks. A mid-complexity mobile application takes 3-5 months. A full enterprise software platform can take 6-12 months. We always provide a detailed timeline during the planning phase and stick to it — our on-time delivery rate is 94%.",
  },
  {
    column: "left",
    tag: "Global",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes — the majority of our clients are based internationally, including the USA, UK, UAE, Canada, and Australia. We are a remote-first software development company with communication processes and timezone flexibility designed for international collaboration. We use Slack, Zoom, Jira, and Confluence to keep every client fully in the loop regardless of location.",
  },
  {
    column: "right",
    tag: "Process",
    question: "What is the difference between a software house and a software development company?",
    answer:
      "The terms are often used interchangeably. A software house typically refers to a company that builds software products as a service for other businesses. A software development company may also build its own products. We focus entirely on building custom software for our clients. We are both a software house and a software development company in the truest sense.",
  },
  {
    column: "right",
    tag: "Getting started",
    question: "Can I hire dedicated developers from your company?",
    answer:
      "Absolutely. You can hire one developer or an entire team on a dedicated basis, working exclusively on your project during business hours. Dedicated developers integrate with your existing team, follow your processes, and report directly to you. It is the most cost-effective way to scale your development capacity quickly.",
  },
  {
    column: "right",
    tag: "Quality",
    question: "How do you ensure the quality of your software?",
    answer:
      "Quality is built into every stage of our process — not added at the end. We conduct code reviews, write unit and integration tests, perform manual QA testing, run automated regression testing, and carry out security audits before every release. Our QA team works in parallel with development to catch issues early, which keeps costs low and launch timelines on schedule.",
  },
  {
    column: "right",
    tag: "Legal",
    question: "Is my project idea safe with you? Do you sign NDAs?",
    answer:
      "Yes — absolutely. We sign a mutual Non-Disclosure Agreement (NDA) before any project discussion begins. Your idea, your business data, and all project details are fully confidential. Our team follows strict internal data security policies and we are happy to involve your legal team in reviewing our standard NDA.",
  },
];

export const homeContact = {
  overline: "Start here",
  titleBefore: "Let's build your",
  titleEmphasis: "next big thing",
  subtext:
    "Tell us about your project. We will get back to you within 24 hours with a clear path forward: no obligation, no sales pressure.",
  emailPlaceholder: "Your email address",
  cta: "Get Started",
  reassurance: "Free consultation · No commitment · Based in Islamabad, Pakistan",
} as const;

export const footerBrand = {
  description:
    "A software development company in Islamabad, Pakistan. Building software that lasts.",
  copyright: "© 2026 Next Software Development Company. All rights reserved.",
} as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/software-development" },
      { label: "Web Development", href: "/software-development/web-development" },
      { label: "Mobile Development", href: "/software-development/mobile-app-development" },
      { label: "UI/UX Design", href: "/design-ux" },
      { label: "E-Commerce Development", href: "/solutions/ecommerce" },
      { label: "AI & Automation", href: "/solutions/ai-agent" },
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "QA & Testing", href: "/software-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "#projects" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: contactPath },
      { label: "Contact", href: contactPath },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter / X", href: "https://twitter.com" },
      { label: "Clutch", href: "https://clutch.co" },
    ],
  },
];

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { label: "GitHub", href: "https://github.com", icon: Share2 },
  { label: "Email", href: `mailto:${siteBrand.email}`, icon: Mail },
];

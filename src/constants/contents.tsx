import type { ReactNode } from "react";
import {
  ShieldCheck,
  Sparkle,
  type IconName,
  type StackItem,
} from "@/components/ui/icons";

export const profile = {
  name: "Valerian Dwi Purnomo",
  role: "Frontend Developer",
  location: "Jakarta, Indonesia",
  email: "valerian.dwi.p@gmail.com",
  phone: "+62 896 6599 9991",
  phoneHref: "tel:+6289665999991",
  website: "https://valeriandwi.my.id",
  websiteLabel: "valeriandwi.my.id",
  linkedin: "https://www.linkedin.com/in/valeriandwi",
  github: "https://github.com/valeriandwi",
  cv: "/VALERIAN-DWI-PURNOMO-CV.pdf",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#side-projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const heroStats = [
  { value: "6+", label: "Years building for the web", dark: true },
  { value: "4", label: "Companies, from FMCG to insurance", dark: false },
];

export const ownership = [
  "Code reviews and approvals",
  "Performance optimization",
  "Test automation with Playwright",
  "SIT, UAT and post-release support",
];

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type CompanyLogo =
  | { src: string; alt: string; width: number; height: number; cropLeft?: boolean }
  | { initials: string };

export const experiences: {
  period: string;
  company: string;
  role: string;
  logo: CompanyLogo;
}[] = [
  {
    period: "Apr 2026 to Oct 2026",
    company: "Pasarpolis Indonesia",
    role: "Senior Software Engineer",
    logo: { src: "/logos/pasarpolis.png", alt: "Pasarpolis logo", width: 32, height: 32 },
  },
  {
    period: "Oct 2022 to Apr 2026",
    company: "PT. Inti Corpora Teknologi",
    role: "Frontend Developer",
    logo: {
      src: "/logos/inticorp.png",
      alt: "Inti Corpora Teknologi logo",
      width: 80,
      height: 80,
    },
  },
  {
    period: "Sept 2019 to Oct 2022",
    company: "PT. Mayora Indah Tbk",
    role: "Frontend Web Developer",
    logo: {
      src: "/logos/mayora.png",
      alt: "Mayora logo",
      width: 198,
      height: 39,
      cropLeft: true,
    },
  },
  {
    period: "Jan 2018 to May 2018",
    company: "EWORK",
    role: "Back End Developer",
    logo: { initials: "EW" },
  },
];

export interface FeaturedWork {
  tone: "c1" | "c2" | "c3" | "c4";
  company: string;
  role: string;
  period: string;
  title: string;
  stack: StackItem[];
  tags: string[];
  shot?: ImageAsset;
  description: string;
  result: string;
}

export const featuredWorks: FeaturedWork[] = [
  {
    tone: "c1",
    company: "Pasarpolis Indonesia",
    role: "Senior Software Engineer",
    period: "2026",
    title: "New Insurance Platform",
    stack: [
      { icon: "react", label: "React" },
      { icon: "vite", label: "Vite" },
      { icon: "playwright", label: "Playwright" },
      { icon: "docker", label: "Docker" },
    ],
    tags: ["Code review", "UAT"],
    description:
      "Helped initiate and build the platform replacing the existing CARE Insurance system.",
    result:
      "Led the frontend refactor from Create React App to Vite, speeding up the site and its CI/CD builds and deploys.",
  },
  {
    tone: "c2",
    company: "PT. Inti Corpora Teknologi",
    role: "Frontend Developer",
    period: "2022 to 2026",
    title: "BNI Customer Hub",
    stack: [
      { icon: "react", label: "React" },
      { icon: "nextdotjs", label: "Next.js" },
    ],
    tags: ["Customer web app", "Back office", "SIT and UAT"],
    shot: {
      src: "/work/bni-customer-hub.webp",
      alt: "BNI Customer Hub dashboard showing savings and loan summaries",
      width: 1079,
      height: 555,
    },
    description:
      "Designed and developed the Customer Hub web application and its Back Office, turning business and user requirements into scalable frontend solutions.",
    result:
      "Took features from business requirements through SIT, UAT, production and post-release support.",
  },
  {
    tone: "c3",
    company: "PT. Inti Corpora Teknologi",
    role: "Frontend Developer",
    period: "2022 to 2026",
    title: "IFG Life Financial Dashboard",
    stack: [
      { icon: "react", label: "React" },
      { icon: "nextdotjs", label: "Next.js" },
    ],
    tags: ["Real-time data", "Financial reporting", "Account management"],
    shot: {
      src: "/work/ifg-dashboard.webp",
      alt: "IFG Life financial dashboard showing balance summaries and account charts",
      width: 1628,
      height: 1109,
    },
    description:
      "Implemented real-time data visualization, financial reporting and account management.",
    result:
      "Delivered with QA, backend engineers and business analysts to keep releases stable and on time.",
  },
  {
    tone: "c4",
    company: "PT. Mayora Indah Tbk",
    role: "Frontend Web Developer",
    period: "2019 to 2022",
    title: "Internal Business Platforms",
    stack: [
      { icon: "react", label: "React" },
      { icon: "javascript", label: "JavaScript" },
    ],
    tags: ["KPI and HR dashboards", "Helpdesk", "Team training"],
    description:
      "Built company portals and KPI, HR, Sales and Helpdesk dashboards, along with management and operational systems.",
    result:
      "Wrote React.js and JavaScript documentation and training material to help the team adopt it.",
  },
];

export interface SideProject {
  label: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: ImageAsset & { position?: string };
  link?: { href: string; label: string };
}

export const sideProjects: SideProject[] = [
  {
    label: "Tech Lead",
    title: "Hiraka POS",
    description:
      "Android point-of-sale app for retail stores, minimarkets and wholesale businesses, covering sales, wholesale pricing, price negotiation and transaction history.",
    stack: [
      { icon: "react", label: "React Native" },
      { icon: "nextdotjs", label: "Next.js" },
      { icon: "fastify", label: "Fastify" },
      { icon: "docker", label: "Docker" },
    ],
    image: {
      src: "/work/hiraka-pos.webp",
      alt: "Hiraka point-of-sale app on a tablet, showing products and an invoice",
      width: 1200,
      height: 902,
      position: "50% 50%",
    },
    link: {
      href: "https://play.google.com/store/apps/details?id=com.hiraka.pos&hl=en",
      label: "Google Play",
    },
  },
  {
    label: "Machine learning",
    title: "Emotion Recognition",
    description:
      "CNN model that reads emotions from facial expressions, built for a mood-based music recommender.",
    stack: [
      { icon: "javascript", label: "JavaScript" },
      { icon: "python", label: "Python" },
    ],
    image: {
      src: "/work/emotion-recognition.webp",
      alt: "Emotion recognition model drawing a box around a face and labelling it neutral",
      width: 750,
      height: 404,
      position: "20% 0",
    },
    link: {
      href: "https://github.com/valeriandwi/mood-based-music-recommendation",
      label: "View on GitHub",
    },
  },
  {
    label: "Landing page",
    title: "Solvo Studio",
    description: "Landing page for a software house.",
    stack: [{ icon: "react", label: "React" }],
    image: {
      src: "/work/solvo-studio.webp",
      alt: "Solvo Studio landing page hero",
      width: 688,
      height: 318,
      position: "0 0",
    },
  },
  {
    label: "Website",
    title: "Lavegas British Cattery",
    description:
      "Bilingual website for a British Shorthair cattery in Indonesia, with its story, available kittens and testimonials.",
    stack: [{ icon: "nextdotjs", label: "Next.js" }],
    image: {
      src: "/work/lavegas-british.webp",
      alt: "Lavegas British Cattery website hero with two kittens",
      width: 1200,
      height: 607,
    },
    link: { href: "https://lavegas-cattery.vercel.app/", label: "Visit site" },
  },
  {
    label: "Website",
    title: "Cendana Dua Cats",
    description:
      "Website for a registered British Shorthair cattery, with its queens, studs and kittens.",
    stack: [{ icon: "nextdotjs", label: "Next.js" }],
    image: {
      src: "/work/cendana-dua.webp",
      alt: "Cendana Dua website hero with a British Shorthair kitten",
      width: 800,
      height: 555,
    },
    link: { href: "https://cendanaduacats.id/", label: "Visit site" },
  },
];

export interface SkillIcon {
  label: string;
  icon?: IconName;
  glyph?: ReactNode;
  text?: string;
}

export const skillRows: { title: string; icons: SkillIcon[]; summary: string }[] = [
  {
    title: "Frontend",
    icons: [
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "nextdotjs" },
      { label: "TypeScript", icon: "typescript" },
      { label: "TailwindCSS", icon: "tailwindcss" },
    ],
    summary: "ReactJS & Next.js, TypeScript, TailwindCSS",
  },
  {
    title: "State management",
    icons: [
      { label: "Redux", icon: "redux" },
      { label: "Zustand", icon: "zustand" },
    ],
    summary: "Redux / RTK, Zustand",
  },
  {
    title: "Backend and data",
    icons: [
      { label: "Node.js", icon: "nodedotjs" },
      { label: "PostgreSQL", icon: "postgresql" },
    ],
    summary: "NodeJS, PostgreSQL",
  },
  {
    title: "Quality",
    icons: [
      { label: "Testing", glyph: <ShieldCheck /> },
      { label: "Playwright", icon: "playwright" },
    ],
    summary: "Playwright, code reviews, SIT and UAT",
  },
  {
    title: "Workflow",
    icons: [
      { label: "Git", icon: "git" },
      { label: "AI-assisted tools", glyph: <Sparkle /> },
    ],
    summary: "Git, AI-assisted development tools",
  },
  {
    title: "Languages",
    icons: [
      { label: "Indonesian", text: "ID" },
      { label: "English", text: "EN" },
    ],
    summary: "Indonesian, English",
  },
];

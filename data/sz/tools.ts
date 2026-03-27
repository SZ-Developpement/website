import { Blocks, Cloud, Database, Layout, Server, Smartphone } from "lucide-react";

const toolsCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "#06b6d4",
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "#10b981",
  },
  {
    id: "database",
    label: "Base de données",
    icon: Database,
    color: "#6366f1",
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: Cloud,
    color: "#3b82f6",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    color: "#d946ef",
  },
  {
    id: "tools",
    label: "Outils",
    icon: Blocks,
    color: "#f59e0b",
  },
]

const routes_fontend = "/icons/stack/frontend/";
const routes_backend = "/icons/stack/backend/";
const routes_database = "/icons/stack/database/";
const routes_devops = "/icons/stack/devops/";
const routes_mobile = "/icons/stack/mobile/";
const routes_tools = "/icons/stack/tools/";
const routes_languages = "/icons/stack/languages/";

const alltools = [
  { name: "Next.js", icon: `${routes_fontend}nextjs.svg`, category: "Frontend" },
  { name: "React", icon: `${routes_fontend}react.svg`, category: "Frontend" },
  { name: "Tailwind", icon: `${routes_fontend}tailwindcss.svg`, category: "Frontend" },
  { name: "Framer Motion", icon: `${routes_fontend}framer-motion.svg`, category: "Frontend" },

  { name: "Node.js", icon: `${routes_backend}nodejs.svg`, category: "Backend" },
  { name: "NestJS", icon: `${routes_backend}nestjs.svg`, category: "Backend" },
  { name: "GraphQL", icon: `${routes_backend}graphql.svg`, category: "Backend" },
  { name: "Prisma", icon: `${routes_backend}prisma.svg`, category: "Backend" },
  { name: "tRPC", icon: `${routes_backend}trpc.svg`, category: "Backend" },

  { name: "PostgreSQL", icon: `${routes_database}postgresql.svg`, category: "Base de données" },
  { name: "MongoDB", icon: `${routes_database}mongodb.svg`, category: "Base de données" },
  { name: "Neon", icon: `${routes_database}neon.svg`, category: "Base de données" },
  { name: "Supabase", icon: `${routes_database}supabase.svg`, category: "Base de données" },
  { name: "PlanetScale", icon: `${routes_database}planetscale.svg`, category: "Base de données" },
  { name: "Redis", icon: `${routes_database}redis.svg`, category: "Base de données" },
  { name: "SQLite", icon: `${routes_database}sqlite.svg`, category: "Base de données" },
  { name: "MySQL", icon: `${routes_database}mysql.svg`, category: "Base de données" },

  { name: "Docker", icon: `${routes_devops}docker.svg`, category: "DevOps & Cloud" },
  { name: "AWS", icon: `${routes_devops}aws.svg`, category: "DevOps & Cloud" },
  { name: "Vercel", icon: `${routes_devops}vercel.svg`, category: "DevOps & Cloud" },
  { name: "GitHub Actions", icon: `${routes_devops}github-actions.svg`, category: "DevOps & Cloud" },
  { name: "Terraform", icon: `${routes_devops}terraform.svg`, category: "DevOps & Cloud" },

  { name: "React Native", icon: `${routes_mobile}react-native.svg`, category: "Mobile" },
  { name: "Expo", icon: `${routes_mobile}expo.svg`, category: "Mobile" },
  { name: "iOS", icon: `${routes_mobile}apple.svg`, category: "Mobile" },
  { name: "Android", icon: `${routes_mobile}android.svg`, category: "Mobile" },

  { name: "Figma", icon: `${routes_tools}figma.svg`, category: "Outils" },
  { name: "Jest", icon: `${routes_tools}jest.svg`, category: "Outils" },
  { name: "Cypress", icon: `${routes_tools}cypress.svg`, category: "Outils" },
  { name: "Sentry", icon: `${routes_tools}sentry.svg`, category: "Outils" },
  { name: "Storybook", icon: `${routes_tools}storybook.svg`, category: "Outils" },

]

const allLanguages = [
  { name: "HTML", icon: `${routes_languages}html.svg`},
  { name: "CSS", icon: `${routes_languages}css.svg`},
  { name: "JavaScript", icon: `${routes_languages}javascript.svg`},
  { name: "TypeScript", icon: `${routes_languages}typescript.svg`},
  { name: "Python", icon: `${routes_languages}python.svg`},
  { name: "Rust", icon: `${routes_languages}rust.svg`},
  { name: "C++", icon: `${routes_languages}c-plusplus.svg`},
  { name: "C#", icon: `${routes_languages}c-sharp.svg`},
  { name: "Lua", icon: `${routes_languages}lua.svg`},
  { name: "PHP", icon: `${routes_languages}php.svg`},
  { name: "Ruby", icon: `${routes_languages}ruby.svg`},
  { name: "Swift", icon: `${routes_languages}swift.svg`},
  { name: "SQL", icon: `${routes_languages}sql.svg`},
]

export { toolsCategories, alltools, allLanguages };
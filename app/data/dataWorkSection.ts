import type { WorkProject } from "./dataType";

const work: WorkProject[] = [
  {
    title: "Ambalaje DnD — Online store",
    description:
      "E-commerce website for packaging, containers, and household products.",
    usedTools: ["React", "CSS", "Tailwind", "Firebase"],
    images: [
      "/images/dndPerformance/DNDimg1.webp",
      "/images/dndPerformance/DNDimg2.webp",
      "/images/dndPerformance/DNDimg3.webp",
    ],
    link: "https://www.ambalaje-dnd.com/",
    githubLink: "https://github.com/ionutdiaconescu/dnd-packaging-products",
  },
  {
    title: "TeamChat",
    description:
      "A modern chat app created to communicate with your friends or coworkers.",
    usedTools: ["Next.js", "React", "Tailwind"],
    images: [
      "/images/teamChat/TeamChat1.webp",
      "/images/teamChat/TeamChat2.webp",
      "/images/teamChat/TeamChat3.webp",
    ],
    link: "https://example.com/real-estate",
    githubLink: "https://github.com/ionutdiaconescu/TeamChat",
  },
  {
    title: "Asociatia Zambete Magice",
    description:
      "A nonprofit organization focused on donation campaigns to help underprivileged children in Timisoara, providing support, care, and opportunities for a better tomorrow.",
    usedTools: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Postgres",
      "Strapi CMS",
    ],
    images: [
      "/images/zambeteMagice/zm1.webp",
      "/images/zambeteMagice/zm2.webp",
      "/images/zambeteMagice/zm3.webp",
    ],
    link: "https://asociatia-zambete-magice.vercel.app/",
    githubLink: "https://github.com/ionutdiaconescu/asociatia_zambete_magice",
  },
  {
    title: "Arde Car Wash",
    description: "A self-service car wash website",
    usedTools: ["React", "Tailwind"],
    images: [
      "/images/carWash/CarWash1.webp",
      "/images/carWash/CarWash2.webp",
      "/images/carWash/CarWash3.webp",
    ],
    link: "https://arde-car-wash.netlify.app/",
    githubLink: "https://github.com/ionutdiaconescu/arde-car-wash",
  },
];

export default work;

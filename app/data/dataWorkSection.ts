import type { WorkProject } from "./dataType";

const work: WorkProject[] = [
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
    title: "TeamChat",
    description:
      "A modern chat app created to communicate with your friends or coworkers.",
    usedTools: ["Next.js", "React", "Tailwind"],
    images: [
      "/images/teamChat/TeamChat1.webp",
      "/images/teamChat/TeamChat2.webp",
      "/images/teamChat/TeamChat3.webp",
    ],
    link: "https://teamchat-888f2.firebaseapp.com",
    githubLink: "https://github.com/ionutdiaconescu/TeamChat",
  },
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
    title: "Food Delivery",
    description: "A food delivery website with a modern ordering experience.",
    usedTools: ["React", "CSS", "Tailwind", "Firebase"],
    images: [
      "/images/foodDelivery/fd1.webp",
      "/images/foodDelivery/fd2.webp",
      "/images/foodDelivery/fd3.webp",
    ],
    link: "https://food-delivery-bc1c1.firebaseapp.com",
    githubLink: "https://github.com/ionutdiaconescu/food-delivery-app",
  },
];

export default work;

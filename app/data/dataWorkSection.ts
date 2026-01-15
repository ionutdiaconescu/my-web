type WorkProject = {
  title: string;
  description: string;
  usedTools: string[];
  images: string[];
  link?: string;
};

const work: WorkProject[] = [
  {
    title: "Ambalaje DnD - Magazin online",
    description:
      "Site e-commerce pentru ambalaje, caserole și produse de menaj.",
    usedTools: ["React", "CSS", "Tailwind", "Firebase"],
    images: [
      "/images/dndPerformance/DNDimg1.webp",
      "/images/dndPerformance/DNDimg2.webp",
      "/images/dndPerformance/DNDimg3.webp",
    ],
    link: "https://www.ambalaje-dnd.com/",
  },
  {
    title: "TeamChat",
    description:
      "A modern chat app created to comunicate with your friends or coworkers.",
    usedTools: ["Next.js", "React", "Tailwind"],
    images: [
      "/images/TeamChat/TeamChat1.webp",
      "/images/TeamChat/TeamChat2.webp",
      "/images/TeamChat/TeamChat3.webp",
    ],
    link: "https://example.com/real-estate",
  },
  {
    title: "Asociatia Zambete Magice",
    description:
      "A nonprofit organization focused on creating donation campaigns to help underprivileged children in Timișoara, providing support, care, and opportunities for a better tomorrow.",
    usedTools: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Postgress",
      "Strapi CMS",
    ],
    images: [
      "https://via.placeholder.com/1200x800?text=SaaS+1",
      "https://via.placeholder.com/1200x800?text=SaaS+2",
      "https://via.placeholder.com/1200x800?text=SaaS+3",
    ],
    link: "https://asociatia-zambete-magice.vercel.app/",
  },
  {
    title: "Arde Car Wash",
    description: "A Self-service car wash website",
    usedTools: ["React", "Tailwind"],
    images: [
      "/images/carWash/CarWash1.webp",
      "/images/carWash/CarWash2.webp",
      "/images/carWash/CarWash3.webp",
    ],
    link: "https://arde-car-wash.netlify.app/",
  },
];

export default work;

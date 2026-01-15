import { FaNodeJs, FaReact, FaCss3 } from "react-icons/fa";
import {
  SiPostgresql,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 w-6 h-6" />,
  },
  {
    name: "Postgress",
    icon: <SiPostgresql className="text-blue-700 w-6 h-6" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white w-6 h-6" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 w-6 h-6" />,
  },
  {
    name: "CSS Modules",
    icon: <FaCss3 className="text-blue-400 w-6 h-6" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
  },
];

export default skills;

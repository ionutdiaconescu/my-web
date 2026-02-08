import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ionut Diaconescu Portfolio",
    short_name: "Ionut",
    description:
      "Front-end developer building focused, accessible interfaces with React, Next.js, and Tailwind.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b22",
    theme_color: "#050b22",
    icons: [
      {
        src: "/images/logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}

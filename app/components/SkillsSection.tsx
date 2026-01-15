import React from "react";
import skills from "../data/dataSkillsSection";

const SkillsSection = () => {
  return (
    <main id="skills" className="card-design w-full">
      <section className="flex flex-col gap-2">
        <h1 className="text-(--accent) font-extrabold text-lg">Skills</h1>
        <h2 className="text-base font-semibold text-(--foreground)">
          Tools used most days
        </h2>
        <p className="text-(--smoke) text-sm">
          A focused front-end stack covering modern frameworks, state
          management, and styling approaches.
        </p>
        <ul className="flex flex-wrap items-center justify-start gap-3">
          {skills.map(({ name, icon }) => (
            <li
              key={name}
              className="flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-(--secondary-accent)"
            >
              {icon}
              {name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default SkillsSection;

import React from "react";
import skills from "../data/dataSkillsSection";

const SkillsSection = () => {
  const splitIndex = Math.ceil(skills.length / 2);
  const topRow = skills.slice(0, splitIndex);
  const bottomRow = skills.slice(splitIndex);
  const thirdIndex = Math.ceil(skills.length / 3);
  const rowOne = skills.slice(0, thirdIndex);
  const rowTwo = skills.slice(thirdIndex, thirdIndex * 2);
  const rowThree = skills.slice(thirdIndex * 2);
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
        <div className="flex lg:hidden">
          <div className="inline-flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {rowOne.map(({ name, icon }, index: number) => {
                const isLast = index === rowOne.length - 1;
                return (
                  <div
                    key={name}
                    className={`relative flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-(--secondary-accent)
                      ${
                        !isLast
                          ? "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-[2px] after:w-3 after:translate-x-3 after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-r after:from-cyan-400/70 after:to-transparent after:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }
                      ${
                        isLast
                          ? "before:content-[''] before:absolute before:left-1/2 before:top-full before:h-3 before:w-[2px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-b before:from-cyan-400/70 before:to-gray-600/20 before:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 flex-row-reverse">
              {rowTwo.map(({ name, icon }, index: number) => {
                const isLast = index === rowTwo.length - 1;
                return (
                  <div
                    key={name}
                    className={`relative flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-(--secondary-accent)
                      ${
                        !isLast
                          ? "before:content-[''] before:absolute before:top-1/2 before:left-0 before:h-[2px] before:w-3 before:-translate-x-3 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-l before:from-cyan-400/70 before:to-transparent before:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }
                      ${
                        isLast
                          ? "after:content-[''] after:absolute after:left-1/2 after:top-full after:h-3 after:w-[2px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-b after:from-cyan-400/70 after:to-gray-600/20 after:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              {rowThree.map(({ name, icon }, index: number) => {
                const isLast = index === rowThree.length - 1;
                return (
                  <div
                    key={name}
                    className={`relative flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-(--secondary-accent)
                      ${
                        !isLast
                          ? "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-[2px] after:w-3 after:translate-x-3 after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-r after:from-cyan-400/70 after:to-transparent after:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="inline-flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {topRow.map(({ name, icon }, index: number) => {
                const isFirst = index === 0;
                const isLast = index === topRow.length - 1;
                return (
                  <div
                    key={name}
                    className={`relative flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-(--secondary-accent)
                      ${
                        !isLast
                          ? "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-[2px] after:w-3 after:translate-x-3 after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-r after:from-cyan-400/70 after:to-transparent after:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }
                      ${
                        isFirst || isLast
                          ? "before:content-[''] before:absolute before:left-1/2 before:top-full before:h-3 before:w-[2px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-b before:from-cyan-400/70 before:to-gray-600/20 before:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 flex-row-reverse">
              {bottomRow.map(({ name, icon }, index: number) => {
                const isLast = index === bottomRow.length - 1;
                return (
                  <div
                    key={name}
                    className={`relative flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-(--secondary-accent)
                      ${
                        !isLast
                          ? "before:content-[''] before:absolute before:top-1/2 before:left-0 before:h-[2px] before:w-3 before:-translate-x-3 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-l before:from-cyan-400/70 before:to-transparent before:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                          : ""
                      }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;

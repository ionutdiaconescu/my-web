import React from "react";
import skills from "../data/dataSkillsSection";

const SkillsSection = () => {
  const splitIndex = Math.ceil(skills.length / 2);
  const topRow = skills.slice(0, splitIndex);
  const bottomRow = skills.slice(splitIndex);
  const quarterIndex = Math.ceil(skills.length / 4);
  const rowOne = skills.slice(0, quarterIndex);
  const rowTwo = skills.slice(quarterIndex, quarterIndex * 2);
  const rowThree = skills.slice(quarterIndex * 2, quarterIndex * 3);
  const rowFour = skills.slice(quarterIndex * 3);
  const hasThirdRow = rowThree.length > 0;
  const hasFourthRow = rowFour.length > 0;
  const baseChipClass =
    "relative flex items-center gap-2 border border-gray-500/50 rounded-2xl py-2 px-3 bg-gray-800/70 text-secondary-accent";
  const connectorRight =
    "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-0.5 after:w-3 after:translate-x-3 after:-translate-y-1/2 after:rounded-full after:bg-linear-to-r after:from-cyan-400/70 after:to-transparent after:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const connectorLeft =
    "before:content-[''] before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-3 before:-translate-x-3 before:-translate-y-1/2 before:rounded-full before:bg-linear-to-l before:from-cyan-400/70 before:to-transparent before:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const connectorDownBefore =
    "before:content-[''] before:absolute before:left-1/2 before:top-full before:h-3 before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-linear-to-b before:from-cyan-400/70 before:to-gray-600/20 before:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const connectorDownAfter =
    "after:content-[''] after:absolute after:left-1/2 after:top-full after:h-3 after:w-0.5 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-b after:from-cyan-400/70 after:to-gray-600/20 after:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const renderRow = (
    items: typeof skills,
    containerClassName: string,
    getExtraClass: (args: { isFirst: boolean; isLast: boolean }) => string,
  ) => (
    <div className={containerClassName}>
      {items.map(({ name, icon }, index: number) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        return (
          <div
            key={name}
            className={[baseChipClass, getExtraClass({ isFirst, isLast })]
              .filter(Boolean)
              .join(" ")}
          >
            {icon}
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
  return (
    <section id="skills" className="card-design w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-accent font-extrabold text-lg">Skills</h2>
        <h3 className="text-base font-semibold text-foreground">
          Tools used most days
        </h3>
        <p className="text-smoke text-sm">
          A focused front-end stack covering modern frameworks, state
          management, and styling approaches.
        </p>
        <div className="flex lg:hidden">
          <div className="inline-flex flex-col gap-3">
            {renderRow(rowOne, "flex items-center gap-3", ({ isLast }) =>
              [
                !isLast ? connectorRight : "",
                isLast && hasThirdRow ? connectorDownBefore : "",
              ]
                .filter(Boolean)
                .join(" "),
            )}

            {renderRow(
              rowTwo,
              "flex items-center gap-3 flex-row-reverse",
              ({ isLast }) =>
                [
                  !isLast ? connectorLeft : "",
                  isLast && hasThirdRow ? connectorDownAfter : "",
                ]
                  .filter(Boolean)
                  .join(" "),
            )}

            {renderRow(rowThree, "flex items-center gap-3", ({ isLast }) =>
              [
                !isLast ? connectorRight : "",
                isLast && hasFourthRow ? connectorDownBefore : "",
              ]
                .filter(Boolean)
                .join(" "),
            )}

            {renderRow(
              rowFour,
              "flex items-center gap-3 flex-row-reverse",
              ({ isLast }) => (!isLast ? connectorLeft : ""),
            )}
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="inline-flex flex-col gap-3">
            {renderRow(
              topRow,
              "flex items-center gap-3",
              ({ isFirst, isLast }) =>
                [
                  !isLast ? connectorRight : "",
                  isFirst || isLast ? connectorDownBefore : "",
                ]
                  .filter(Boolean)
                  .join(" "),
            )}

            {renderRow(
              bottomRow,
              "flex items-center gap-3 flex-row-reverse",
              ({ isLast }) => (!isLast ? connectorLeft : ""),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

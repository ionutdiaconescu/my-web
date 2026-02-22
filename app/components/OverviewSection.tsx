import React from "react";
import { overviewItems } from "../data/dataOverviewSection";
import type { OverviewItem } from "../data/dataType";

const OverviewSection = () => {
  const splitIndex = Math.ceil(overviewItems.length / 2);
  const topRow = overviewItems.slice(0, splitIndex);
  const bottomRow = overviewItems.slice(splitIndex);
  const baseItemClass =
    "relative flex items-center gap-3 border border-gray-500/50 rounded-full py-2 px-4 bg-gray-800/70 text-secondary-accent";
  const baseMobileItemClass =
    "relative flex items-start gap-3 border border-gray-500/50 rounded-2xl py-3 px-4 bg-gray-800/70 text-secondary-accent";
  const mobileConnector =
    "after:content-[''] after:absolute after:left-7 after:top-full after:h-3 after:w-0.5 after:rounded-full after:bg-linear-to-b after:from-cyan-400/70 after:to-gray-600/20 after:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const connectorRight =
    "after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-0.5 after:w-3 after:translate-x-3 after:-translate-y-1/2 after:rounded-full after:bg-linear-to-r after:from-cyan-400/70 after:to-transparent after:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const connectorDown =
    "before:content-[''] before:absolute before:left-1/2 before:top-full before:h-3 before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-linear-to-b before:from-cyan-400/70 before:to-gray-600/20 before:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const connectorLeft =
    "before:content-[''] before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-3 before:-translate-x-3 before:-translate-y-1/2 before:rounded-full before:bg-linear-to-l before:from-cyan-400/70 before:to-transparent before:shadow-[0_0_10px_rgba(34,211,238,0.35)]";
  const getTopRowClass = (isFirst: boolean, isLast: boolean) =>
    [
      baseItemClass,
      !isLast ? connectorRight : "",
      isFirst || isLast ? connectorDown : "",
    ]
      .filter(Boolean)
      .join(" ");
  const getBottomRowClass = (isLast: boolean) =>
    [baseItemClass, !isLast ? connectorLeft : ""].filter(Boolean).join(" ");
  return (
    <section id="overview" className="card-design">
      <div className="flex flex-col gap-2">
        <h2 className="text-accent font-extrabold text-lg">Overview</h2>
        <h3 className="text-base font-semibold text-foreground">
          From ideas to interfaces
        </h3>
        <p className="text-smoke text-sm">
          Projects move from loose concept to well-structured UI with
          predictable behavior, clean code, and interactions that feel natural
          on every device.
        </p>
        <div className="flex lg:hidden">
          <div className="flex flex-col gap-3 w-full">
            {overviewItems.map((item: OverviewItem, index: number) => (
              <div
                key={item.title}
                className={[
                  baseMobileItemClass,
                  index < overviewItems.length - 1 ? mobileConnector : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/70 border border-gray-500/50 text-accent text-xs font-bold shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="leading-tight">
                  <p className="font-semibold text-sm text-foreground">
                    {item.title}
                  </p>
                  <span className="text-xs text-smoke">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="inline-flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {topRow.map((item: OverviewItem, index: number) => {
                const isFirst = index === 0;
                const isLast = index === topRow.length - 1;
                return (
                  <div
                    key={item.title}
                    className={getTopRowClass(isFirst, isLast)}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/70 border border-gray-500/50 text-accent text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="leading-tight">
                      <p className="font-semibold text-sm text-foreground">
                        {item.title}
                      </p>
                      <span className="text-xs text-smoke">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 flex-row-reverse">
              {bottomRow.map((item: OverviewItem, index: number) => {
                const isLast = index === bottomRow.length - 1;
                return (
                  <div key={item.title} className={getBottomRowClass(isLast)}>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/70 border border-gray-500/50 text-accent text-xs font-bold">
                      {String(index + splitIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="leading-tight">
                      <p className="font-semibold text-sm text-foreground">
                        {item.title}
                      </p>
                      <span className="text-xs text-smoke">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

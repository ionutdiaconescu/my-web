import React from "react";
import { overviewItems } from "../data/dataOverviewSection";
import type { OverviewItem } from "../data/dataType";

const OverviewSection = () => {
  return (
    <main id="overview" className="card-design">
      <section className="flex flex-col gap-2">
        <h1 className="text-(--accent) font-extrabold text-lg">Overview</h1>
        <h2 className="text-base font-semibold text-(--foreground)">
          From ideas to interfaces
        </h2>
        <p className="text-(--smoke) text-sm">
          Projects move from loose concept to well-structured UI with
          predictable behavior, clean code, and interactions that feel natural
          on every device.
        </p>
        <div className="flex gap-2">
          {overviewItems.map((item: OverviewItem) => (
            <div
              className="border border-gray-500/50 rounded-2xl py-2 px-3  bg-gray-800/70 text-(--secondary-accent)"
              key={item.title}
            >
              <p>{item.title}</p>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OverviewSection;

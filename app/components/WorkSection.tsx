"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdOpenInNew } from "react-icons/md";
import work from "../data/dataWorkSection";
import type { WorkProject } from "../data/dataType";

const WorkSection = () => {
  const [previewProjectIndex, setPreviewProjectIndex] = useState<number | null>(
    null,
  );
  const [previewImageIndex, setPreviewImageIndex] = useState(0);

  const openPreview = (projectIndex: number) => {
    setPreviewProjectIndex(projectIndex);
    setPreviewImageIndex(0);
  };

  const closePreview = () => {
    setPreviewProjectIndex(null);
    setPreviewImageIndex(0);
  };

  const goPrev = () => {
    if (previewProjectIndex === null) return;
    const total = work[previewProjectIndex].images.length;
    setPreviewImageIndex((idx) => (idx - 1 + total) % total);
  };

  const goNext = () => {
    if (previewProjectIndex === null) return;
    const total = work[previewProjectIndex].images.length;
    setPreviewImageIndex((idx) => (idx + 1) % total);
  };
  return (
    <main id="projects" className="card-design w-full">
      <section className="flex flex-col gap-2">
        <h1 className="text-(--accent) font-extrabold text-lg">Work</h1>
        <h2 className="text-base font-semibold text-(--foreground)">
          Recent selected projects
        </h2>
        <p className="text-(--smoke) text-sm">
          A snapshot of commercial and personal work. Each link can route to a
          full case study with goals, process, and outcomes.
        </p>

        <div>
          {work.map((project: WorkProject, idx: number) => (
            <div
              key={project.title}
              className="border border-gray-500/50 rounded-2xl py-3 px-4 mb-4 bg-gray-800/70 text-(--secondary-accent) relative cursor-pointer"
              onClick={() => openPreview(idx)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-(--accent)">{project.title}</p>
                  <span className="block mt-1">{project.description}</span>
                  <ul className="flex flex-wrap items-center gap-2 mt-3">
                    {project.usedTools.map((tool: string) => (
                      <li
                        key={tool}
                        className="text-sm border border-gray-500/40 rounded-full py-1 px-2 bg-gray-800/60"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-800/60 border border-gray-500/40 hover:bg-cyan-500/70 hover:border-cyan-500/60 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/30"
                      aria-label={`Open ${project.title}`}
                    >
                      <MdOpenInNew className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div className="relative w-full rounded-xl overflow-hidden border border-gray-500/40 bg-gray-900/50">
                  <div className="relative w-full aspect-video">
                    <img
                      src={project.images[0]}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {previewProjectIndex !== null &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md"
              onClick={closePreview}
            >
              <div
                className="relative w-screen h-screen border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closePreview}
                  className="absolute right-4 top-4 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                  aria-label="Close preview"
                >
                  <MdClose className="w-5 h-5" />
                </button>

                <div className="h-full w-full flex items-center justify-center">
                  <button
                    onClick={goPrev}
                    className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition mr-3"
                    aria-label="Previous image"
                  >
                    <span className="text-xl">‹</span>
                  </button>

                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={work[previewProjectIndex].images[previewImageIndex]}
                      alt={`${work[previewProjectIndex].title} preview ${
                        previewImageIndex + 1
                      }`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <button
                    onClick={goNext}
                    className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition ml-3"
                    aria-label="Next image"
                  >
                    <span className="text-xl">›</span>
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-white/80 text-sm">
                  <span className="font-semibold text-(--accent)">
                    {work[previewProjectIndex].title}
                  </span>
                  <span>
                    {previewImageIndex + 1} /{" "}
                    {work[previewProjectIndex].images.length}
                  </span>
                </div>

                <div className="sm:hidden mt-3 flex items-center justify-center gap-3">
                  <button
                    onClick={goPrev}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                    aria-label="Previous image"
                  >
                    <span className="text-xl">‹</span>
                  </button>
                  <button
                    onClick={goNext}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                    aria-label="Next image"
                  >
                    <span className="text-xl">›</span>
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </section>
    </main>
  );
};

export default WorkSection;

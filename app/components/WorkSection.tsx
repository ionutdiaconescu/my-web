"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import work from "../data/dataWorkSection";
import type { WorkProject } from "../data/dataType";

const WorkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties | null>(
    null
  );
  const slideInterval = useRef<number | null>(null);
  const mobileSlideInterval = useRef<number | null>(null);

  useEffect(() => {
    if (hoveredIndex === null) {
      if (slideInterval.current) {
        window.clearInterval(slideInterval.current);
        slideInterval.current = null;
      }
      return;
    }

    setSlideIndex(0);
    const imgs = work[hoveredIndex]?.images ?? [];
    if (imgs.length <= 1) return;

    slideInterval.current = window.setInterval(() => {
      setSlideIndex((s) => (s + 1) % imgs.length);
    }, 2000);

    return () => {
      if (slideInterval.current) {
        window.clearInterval(slideInterval.current);
        slideInterval.current = null;
      }
    };
  }, [hoveredIndex]);

  // Mobile slideshow when expanded
  useEffect(() => {
    if (expandedIndex === null) {
      if (mobileSlideInterval.current) {
        window.clearInterval(mobileSlideInterval.current);
        mobileSlideInterval.current = null;
      }
      return;
    }

    setMobileSlideIndex(0);
    const imgs = work[expandedIndex]?.images ?? [];
    if (imgs.length <= 1) return;

    mobileSlideInterval.current = window.setInterval(() => {
      setMobileSlideIndex((s) => (s + 1) % imgs.length);
    }, 3000);

    return () => {
      if (mobileSlideInterval.current) {
        window.clearInterval(mobileSlideInterval.current);
        mobileSlideInterval.current = null;
      }
    };
  }, [expandedIndex]);

  // apply / remove aside hide effect when preview active
  // apply / remove aside hide effect when preview active
  useEffect(() => {
    const aside = document.querySelector("aside");
    if (!aside) return;

    if (hoveredIndex !== null) {
      const updateOverlay = () => {
        const asideRect = aside.getBoundingClientRect();
        const navCardElement = aside.querySelector(
          ".card-design"
        ) as HTMLElement;
        if (!navCardElement) return;

        const navCardHeight = navCardElement.offsetHeight;
        const navCardWidth = navCardElement.offsetWidth;
        // Prioritiza width - height se adapteaza dupa continut
        const maxWidth = asideRect.width * 1.2;
        const maxHeight = Math.min(
          navCardHeight * 1.1,
          window.innerHeight * 0.65
        );

        // Centrat vertical pe ecran
        const topPos = (window.innerHeight - maxHeight) / 2;

        // Calculez centrul navCard-ului pe ecran
        const navCardCenterX = asideRect.left + asideRect.width / 2;
        // Translatex trebuie sa mute mai mult la stanga
        const translateX = navCardCenterX - window.innerWidth / 2 - 650;

        setOverlayStyle({
          position: "absolute",
          left: "50%",
          top: topPos + "px",
          width: maxWidth + "px",
          height: maxHeight + "px",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: "none",
          boxSizing: "border-box",
          transform: `translateX(${translateX}px)`,
        });
      };

      updateOverlay();
      (aside as HTMLElement).style.transition =
        "transform 500ms ease, opacity 500ms ease, filter 500ms ease";
      (aside as HTMLElement).style.transform = "translateX(-5%) scale(.98)";
      (aside as HTMLElement).style.opacity = "0.05";
      (aside as HTMLElement).style.filter = "blur(4px)";

      window.addEventListener("scroll", updateOverlay, { passive: true });
      window.addEventListener("resize", updateOverlay);

      return () => {
        (aside as HTMLElement).style.transform = "";
        (aside as HTMLElement).style.opacity = "";
        (aside as HTMLElement).style.filter = "";
        window.removeEventListener("scroll", updateOverlay);
        window.removeEventListener("resize", updateOverlay);
      };
    } else {
      (aside as HTMLElement).style.transform = "";
      (aside as HTMLElement).style.opacity = "";
      (aside as HTMLElement).style.filter = "";
    }
  }, [hoveredIndex]);
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
              className="border border-gray-500/50 rounded-2xl py-3 px-4 mb-4 bg-gray-800/70 text-(--secondary-accent) relative lg:cursor-default cursor-pointer"
              onClick={() => {
                // Only handle click on mobile (not desktop)
                if (window.innerWidth < 1024) {
                  setExpandedIndex(expandedIndex === idx ? null : idx);
                }
              }}
            >
              {/* Desktop-only hover layer - invisible and only active on large screens */}
              <div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="hidden lg:block absolute inset-0 z-10 pointer-events-auto rounded-2xl"
              />

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
                  {/* Mobile expand indicator - arrow shows expand state */}
                  <div className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-800/60 border border-gray-500/40 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 transition-transform ${
                        expandedIndex === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

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

              {/* Mobile expanded slideshow - single card with auto transitions */}
              {expandedIndex === idx && (
                <div className="lg:hidden mt-4">
                  <div className="relative w-full rounded-xl overflow-hidden border border-gray-500/40 bg-gray-900/50">
                    <div className="relative w-full aspect-video">
                      <img
                        src={project.images[mobileSlideIndex]}
                        alt={`${project.title} screenshot ${
                          mobileSlideIndex + 1
                        }`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Slide indicators */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                        {project.images.map((_: string, imgIdx: number) => (
                          <button
                            key={imgIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileSlideIndex(imgIdx);
                            }}
                            className={`h-1 rounded-full transition-all ${
                              imgIdx === mobileSlideIndex
                                ? "bg-(--accent) w-4"
                                : "bg-white/40 w-1"
                            }`}
                            aria-label={`Go to slide ${imgIdx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Preview overlay - positioned over the aside - MUST BE LAST ELEMENT */}
        {hoveredIndex !== null && overlayStyle && (
          <div
            style={{ ...overlayStyle, display: overlayStyle.display }}
            className="fixed pointer-events-none"
          >
            <div className="w-full h-full bg-linear-to-b from-gray-900/95 to-gray-900/85 rounded-3xl p-4 pointer-events-auto border border-gray-500/50 flex flex-col shadow-2xl">
              <div className="flex-1 overflow-hidden rounded-2xl">
                <img
                  src={work[hoveredIndex].images[slideIndex]}
                  alt={work[hoveredIndex].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-3">
                <p className="font-bold text-lg text-(--accent)">
                  {work[hoveredIndex].title}
                </p>
                <p className="text-sm text-(--smoke)">
                  {work[hoveredIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default WorkSection;

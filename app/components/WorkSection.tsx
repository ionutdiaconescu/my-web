"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import {
  MdChevronLeft,
  MdChevronRight,
  MdClose,
  MdOpenInNew,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import work from "../data/dataWorkSection";
import type { WorkProject } from "../data/dataType";

type WorkCardProps = {
  project: WorkProject;
  onOpen: () => void;
};

const WorkCard = ({ project, onOpen }: WorkCardProps) => {
  const previewImage = project.images[0];
  const actionButtons = (
    <>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-500/40 bg-gray-800/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-500/60 hover:bg-cyan-500/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_rgba(34,211,238,0.16)]"
          aria-label={`Open ${project.title}`}
        >
          <MdOpenInNew className="h-4 w-4" />
        </a>
      )}

      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-500/40 bg-gray-800/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-500/60 hover:bg-cyan-500/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_rgba(34,211,238,0.16)]"
          aria-label={`Open ${project.title} GitHub repository`}
        >
          <FaGithub className="h-4 w-4" />
        </a>
      )}
    </>
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      className="relative mb-4 w-full cursor-pointer overflow-hidden rounded-2xl border border-gray-500/50 bg-gray-800/70 text-secondary-accent shadow-[0_18px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} preview`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/12" />
        <div className="absolute left-0 top-6 h-20 w-24 rounded-full bg-white/6 blur-2xl" />
        <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-white/4 blur-3xl" />
      </div>

      <div className="relative z-10 px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <div className="w-full min-w-0">
              <p className="text-base font-bold leading-tight text-accent sm:text-lg">
                {project.title}
              </p>
              <span className="mt-1 block text-sm leading-relaxed text-smoke sm:text-base">
                {project.description}
              </span>
            </div>

            <div className="hidden shrink-0 items-center gap-3 sm:flex sm:pt-1">
              {actionButtons}
            </div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              {project.usedTools.map((tool: string) => (
                <li
                  key={tool}
                  className="rounded-full border border-gray-500/40 bg-gray-800/60 px-2 py-1 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2 sm:hidden">
              {actionButtons}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[linear-gradient(180deg,rgba(8,22,42,0.52),rgba(5,11,34,0.72))]">
        <div className="relative h-52 w-full overflow-hidden border-x border-b border-white/8 bg-gray-800/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-18px_32px_rgba(0,0,0,0.18)] backdrop-blur-xs sm:h-auto sm:aspect-video">
          {previewImage ? (
            <>
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={previewImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover scale-110 blur-2xl opacity-35 saturate-125"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,42,0.62),rgba(8,22,42,0.24)_34%,rgba(5,11,34,0.16))]" />
                <div className="absolute inset-x-0 top-0 h-14 bg-linear-to-b from-gray-800/35 to-transparent" />
              </div>

              <Image
                src={previewImage}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center px-1.5 pt-1.5 pb-0 drop-shadow-[0_18px_34px_rgba(0,0,0,0.28)] sm:px-2 sm:pt-2"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-primary/18 via-primary/8 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
                <p className="text-sm font-semibold text-accent">
                  Preview coming soon
                </p>
                <p className="mt-1 text-xs text-smoke">
                  The card keeps a clean glass surface even without a
                  screenshot.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type PreviewModalProps = {
  project: WorkProject;
  imageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  dialogTitleId?: string;
  dialogRef: React.RefObject<HTMLDivElement | null>;
  onTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: () => void;
};

const PreviewModal = ({
  project,
  imageIndex,
  onClose,
  onPrev,
  onNext,
  dialogTitleId,
  dialogRef,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: PreviewModalProps) => {
  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/55 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogTitleId}
        tabIndex={-1}
        ref={dialogRef}
        className="relative h-screen w-screen overflow-hidden border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-3 shadow-2xl backdrop-blur-xl sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
          <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:px-5">
            <div className="min-w-0">
              <p
                id={dialogTitleId}
                className="truncate font-semibold text-accent"
              >
                {project.title}
              </p>
              <p className="text-xs text-white/65 sm:text-sm">
                Image {imageIndex + 1} of {project.images.length}
              </p>
            </div>

            <button
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
              aria-label="Close preview"
            >
              <MdClose className="h-5 w-5" />
            </button>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div
                className="relative h-[70dvh] w-full overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_18px_50px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md touch-pan-y sm:h-[calc(100dvh-11rem)]"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.08))]" />
                  <div className="absolute inset-x-0 top-0 h-px bg-white/18" />
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between px-4 sm:flex">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    aria-label="Previous image"
                  >
                    <MdChevronLeft className="h-7 w-7" />
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    aria-label="Next image"
                  >
                    <MdChevronRight className="h-7 w-7" />
                  </button>
                </div>

                <Image
                  src={project.images[imageIndex]}
                  alt={`${project.title} preview ${imageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain p-2 sm:p-3"
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/22 to-transparent" />
              </div>

              <div className="mt-3 hidden items-center justify-center gap-2 sm:flex">
                {project.images.map((imageSrc, index) => (
                  <span
                    key={`${imageSrc}-${index}`}
                    className={[
                      "h-2.5 rounded-full transition-all duration-300",
                      index === imageIndex
                        ? "w-7 bg-accent shadow-[0_0_16px_rgba(34,211,238,0.45)]"
                        : "w-2.5 bg-white/28",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="mt-2.5 flex w-full items-center justify-center gap-3 sm:hidden">
                <button
                  type="button"
                  onClick={onPrev}
                  className="inline-flex h-12 min-w-32 items-center justify-center gap-2 rounded-2xl border border-white/14 bg-white/10 px-5 text-sm font-semibold tracking-wide text-white shadow-[0_16px_36px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                  aria-label="Previous image"
                >
                  <MdChevronLeft className="h-5 w-5" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex h-12 min-w-32 items-center justify-center gap-2 rounded-2xl border border-white/14 bg-white/10 px-5 text-sm font-semibold tracking-wide text-white shadow-[0_16px_36px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                  aria-label="Next image"
                >
                  <span>Next</span>
                  <MdChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-2.5 flex items-center justify-center gap-2 sm:hidden">
                {project.images.map((imageSrc, index) => (
                  <span
                    key={`${imageSrc}-${index}-mobile`}
                    className={[
                      "h-2 rounded-full transition-all duration-300",
                      index === imageIndex
                        ? "w-6 bg-accent"
                        : "w-2 bg-white/28",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const [previewProjectIndex, setPreviewProjectIndex] = useState<number | null>(
    null,
  );
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const closePreview = () => {
    setPreviewProjectIndex(null);
    setPreviewImageIndex(0);
    if (previouslyFocusedRef.current) {
      previouslyFocusedRef.current.focus();
    }
  };

  useEffect(() => {
    if (previewProjectIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [previewProjectIndex]);

  useEffect(() => {
    if (previewProjectIndex === null) return;
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.focus();

    const focusableSelector =
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
    const handleTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    dialog.addEventListener("keydown", handleTrap);
    return () => dialog.removeEventListener("keydown", handleTrap);
  }, [previewProjectIndex]);

  const openPreview = (projectIndex: number) => {
    setPreviewProjectIndex(projectIndex);
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

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (deltaX > threshold) {
      goNext();
    } else if (deltaX < -threshold) {
      goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  const dialogTitleId =
    previewProjectIndex !== null
      ? `project-preview-title-${previewProjectIndex}`
      : undefined;
  const activeProject =
    previewProjectIndex !== null ? work[previewProjectIndex] : null;

  return (
    <section id="projects" className="card-design w-full p-4 sm:p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-accent font-extrabold text-lg">Work</h2>
        <h3 className="text-base font-semibold text-foreground">
          Recent selected projects
        </h3>
        <p className="text-smoke text-sm">
          A snapshot of commercial and personal work. Each link can route to a
          full case study with goals, process, and outcomes.
        </p>

        <div>
          {work.map((project: WorkProject, idx: number) => (
            <WorkCard
              key={project.title}
              project={project}
              onOpen={() => openPreview(idx)}
            />
          ))}
        </div>

        {activeProject &&
          typeof document !== "undefined" &&
          createPortal(
            <PreviewModal
              project={activeProject}
              imageIndex={previewImageIndex}
              onClose={closePreview}
              onPrev={goPrev}
              onNext={goNext}
              dialogTitleId={dialogTitleId}
              dialogRef={dialogRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />,
            document.body,
          )}
      </div>
    </section>
  );
};

export default WorkSection;

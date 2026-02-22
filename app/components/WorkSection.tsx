"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { MdClose, MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import work from "../data/dataWorkSection";
import type { WorkProject } from "../data/dataType";

type WorkCardProps = {
  project: WorkProject;
  onOpen: () => void;
};

const WorkCard = ({ project, onOpen }: WorkCardProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      className="relative mb-4 w-full cursor-pointer rounded-2xl border border-gray-500/50 bg-gray-800/70 px-4 py-3 text-secondary-accent"
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} preview`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="w-full min-w-0">
          <p className="text-base font-bold leading-tight text-accent sm:text-lg">
            {project.title}
          </p>
          <span className="mt-1 block text-sm leading-relaxed text-smoke sm:text-base">
            {project.description}
          </span>
          <ul className="mt-3 flex flex-wrap items-center gap-2">
            {project.usedTools.map((tool: string) => (
              <li
                key={tool}
                className="rounded-full border border-gray-500/40 bg-gray-800/60 px-2 py-1 text-xs sm:text-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full items-center justify-end gap-3 sm:w-auto sm:justify-start sm:pt-1">
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

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-800/60 border border-gray-500/40 hover:bg-cyan-500/70 hover:border-cyan-500/60 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/30"
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-500/40 bg-gray-900/50">
          <div className="relative w-full aspect-video">
            <Image
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
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
}: PreviewModalProps) => (
  <div
    className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-md"
    onClick={onClose}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogTitleId}
      tabIndex={-1}
      ref={dialogRef}
      className="relative w-screen h-screen border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-4 sm:p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close preview"
      >
        <MdClose className="w-5 h-5" />
      </button>

      <div className="h-full w-full flex items-center justify-center">
        <button
          onClick={onPrev}
          className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition mr-3"
          aria-label="Previous image"
        >
          <span className="text-xl">‹</span>
        </button>

        <div
          className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={project.images[imageIndex]}
            alt={`${project.title} preview ${imageIndex + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={onNext}
          className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition ml-3"
          aria-label="Next image"
        >
          <span className="text-xl">›</span>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-white/80 text-sm">
        <span id={dialogTitleId} className="font-semibold text-accent">
          {project.title}
        </span>
        <span>
          {imageIndex + 1} / {project.images.length}
        </span>
      </div>

      <div className="sm:hidden mt-3 flex items-center justify-center gap-3">
        <button
          onClick={onPrev}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          aria-label="Previous image"
        >
          <span className="text-xl">‹</span>
        </button>
        <button
          onClick={onNext}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          aria-label="Next image"
        >
          <span className="text-xl">›</span>
        </button>
      </div>
    </div>
  </div>
);

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

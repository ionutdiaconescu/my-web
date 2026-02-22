"use client";

import React, { useState } from "react";
import { navLinks } from "../data/dataProfile";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();

    if (href === "#home") {
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }

    const target = document.getElementById(href.substring(1));
    if (!target) return;

    setIsOpen(false);
    const blockMode = href === "#projects" ? "start" : "center";
    target.scrollIntoView({ behavior: "smooth", block: blockMode });
    window.history.replaceState(null, "", href);
  };

  const baseLinkClass =
    "relative cursor-pointer font-semibold text-secondary-accent group";
  const renderLinks = (
    links: { label: string; href: string }[],
    extraClassName = "",
  ) =>
    links.map((item) => (
      <a
        key={item.label}
        href={item.href}
        onClick={(event) => handleNavClick(event, item.href)}
        className={`${baseLinkClass} ${extraClassName}`.trim()}
      >
        {item.label}
        <span
          className="absolute left-0 -bottom-1 h-0.75 w-0 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"
          aria-hidden="true"
        ></span>
      </a>
    ));

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent md:bg-primary">
      <div className="px-4 py-4 sm:px-8 xl:px-24">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            {renderLinks(navLinks)}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden ml-auto m-2 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-500/50 bg-black/50 backdrop-blur-md text-secondary-accent transition hover:bg-black/50"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 flex justify-end">
            <div
              id="mobile-nav"
              className="w-[80vw] max-w-xs rounded-2xl border border-gray-500/30 bg-black/30 backdrop-blur-sm px-5 py-5"
            >
              <div className="flex flex-col gap-4 items-end">
                {renderLinks(navLinks, "text-base")}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

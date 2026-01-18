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

    const target = document.querySelector(href);
    if (!target) return;

    setIsOpen(false);
    const blockMode = href === "#projects" ? "start" : "center";
    target.scrollIntoView({ behavior: "smooth", block: blockMode });
    window.history.replaceState(null, "", href);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="relative cursor-pointer font-semibold text-(--secondary-accent) group"
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-1 h-0.75 w-0 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"
                  aria-hidden="true"
                ></span>
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-500/40 bg-black/30 backdrop-blur-md text-(--secondary-accent) transition hover:bg-black/50"
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
          <div className="md:hidden mt-4 flex justify-end">
            <div
              id="mobile-nav"
              className="w-[80vw] max-w-xs rounded-2xl border border-gray-500/30 bg-black/60 backdrop-blur-lg px-5 py-5"
            >
              <div className="flex flex-col gap-4 items-end">
                <a
                  href="#home"
                  onClick={(event) => handleNavClick(event, "#home")}
                  className="relative cursor-pointer font-semibold text-base text-(--secondary-accent) group"
                >
                  Home
                  <span
                    className="absolute left-0 -bottom-1 h-0.75 w-0 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"
                    aria-hidden="true"
                  ></span>
                </a>
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="relative cursor-pointer font-semibold text-base text-(--secondary-accent) group"
                  >
                    {item.label}
                    <span
                      className="absolute left-0 -bottom-1 h-0.75 w-0 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"
                      aria-hidden="true"
                    ></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

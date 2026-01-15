import React from "react";

import Image from "next/image";
import { navCardData, navLinks } from "../data/dataNavCard";
import { MdOutlineEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavCard = () => {
  return (
    <main className=" lg:sticky lg:top-10  lg:overflow-hidden card-design">
      <div className="flex flex-col gap-4 lg:max-h-[80vh] sm:w-140 lg:w-130 lg:overflow-y-auto relative">
        <section className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="w-24 h-24 border-2 border-(--accent) rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={navCardData.image}
                alt="Profile picture"
                width={96}
                height={96}
                className="object-contain w-full h-full rounded-full"
                priority
              />
            </div>
            <Image
              src={navCardData.logo}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h1 className="font-extrabold text-xl text-(--accent)">
            {navCardData.name}
          </h1>

          <h2 className="font-semibold text-md text-(--foreground)">
            {navCardData.role}
          </h2>
          <p className="text-(--smoke) text-sm">{navCardData.description}</p>
          <div className="flex gap-3">
            <span className="border-2 text-(--accent) text-sm  rounded-2xl p-1 font-semibold">
              {navCardData.status}
            </span>
            <span className="border-2 text-(--accent) text-sm rounded-2xl p-1 font-semibold">
              {navCardData.location}
            </span>
          </div>
        </section>
        <nav className="flex flex-col items-start justify-center gap-2 border-b border-gray-500/50 py-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative cursor-pointer font-semibold text-(--secondary-accent) group"
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 h-0.75 w-0 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </nav>
        <section className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="font-semibold text-md text-(--accent)">
              {navCardData.availability}
            </p>
            <div className="flex items-center gap-3 group">
              <a
                href={`mailto:${navCardData.email}`}
                className="flex items-center gap-2 hover:text-(--accent) transition-colors"
              >
                <MdOutlineEmail className="w-4 h-4 text-(--accent) group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs">Email</span>
                <span className="text-xs text-(--smoke)">
                  {navCardData.email}
                </span>
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <a
                href={navCardData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-(--accent) transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs">LinkedIn</span>
                <span className="text-xs text-(--smoke)">Profil</span>
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <a
                href="https://github.com/ionutdiaconescu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-(--accent) transition-colors"
              >
                <FaGithub className="w-4 h-4 text-gray-700 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs">GitHub</span>
                <span className="text-xs text-(--smoke)">Projects</span>
              </a>
            </div>
          </div>
          <button className="relative mt-4 inline-flex items-center justify-center px-6 py-2 font-bold tracking-wide text-slate-700 rounded-full bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-(--accent) border-2 border-(--accent) shadow-lg hover:scale-105 hover:shadow-xl hover:bg-linear-to-l hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300">
            <MdOutlineMarkEmailRead className="mr-2 w-5 h-5 text-white animate-bounce" />
            Say hello
          </button>
        </section>
      </div>
    </main>
  );
};

export default NavCard;

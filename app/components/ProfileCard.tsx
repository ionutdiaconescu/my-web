import React from "react";

import Image from "next/image";
import { profileCardData } from "../data/dataProfile";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <main
      id="home"
      className="lg:sticky lg:top-24 lg:overflow-hidden card-design"
    >
      <div className="flex flex-col gap-4 sm:w-140 lg:w-130 relative">
        <section className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-24 h-24 border-2 border-(--accent) rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={profileCardData.image}
                alt="Profile picture"
                width={96}
                height={96}
                className="object-contain w-full h-full rounded-full"
                priority
              />
            </div>
            <Image
              src={profileCardData.logo}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h1 className="font-extrabold text-2xl sm:text-3xl text-(--accent) tracking-tight">
            {profileCardData.name}
          </h1>

          <h2 className="font-semibold text-base sm:text-lg text-(--foreground)">
            {profileCardData.role}
          </h2>
          <p className="text-(--smoke) text-sm sm:text-base leading-relaxed">
            {profileCardData.description}
          </p>
          <div className="flex gap-3">
            <span className="border-2 text-(--accent) text-xs sm:text-sm rounded-full px-3 py-1 font-semibold">
              {profileCardData.status}
            </span>
            <span className="border-2 text-(--accent) text-xs sm:text-sm rounded-full px-3 py-1 font-semibold">
              {profileCardData.location}
            </span>
          </div>
        </section>

        <section className="flex flex-col items-start justify-center gap-4 border-t border-gray-500/50 pt-5">
          <div className="flex flex-col gap-3 w-full">
            <p className="font-semibold text-sm sm:text-base text-(--accent)">
              {profileCardData.availability}
            </p>
            <div className="flex items-center gap-3 group">
              <a
                href={`mailto:${profileCardData.email}`}
                className="inline-flex items-center gap-3 rounded-full border border-(--accent) bg-(--background)/60 px-4 py-2.5 text-(--foreground) shadow-sm transition-all hover:scale-[1.02] hover:shadow-md hover:text-(--accent)"
              >
                <MdOutlineEmail className="w-4 h-4 text-(--accent) group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">Email</span>
                <span className="text-sm text-(--smoke)">
                  {profileCardData.email}
                </span>
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <a
                href={profileCardData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-(--accent) bg-(--background)/60 px-4 py-2.5 text-(--foreground) shadow-sm transition-all hover:scale-[1.02] hover:shadow-md hover:text-(--accent)"
              >
                <FaLinkedin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">LinkedIn</span>
                <span className="text-sm text-(--smoke)">Profil</span>
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <a
                href="https://github.com/ionutdiaconescu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-(--accent) bg-(--background)/60 px-4 py-2.5 text-(--foreground) shadow-sm transition-all hover:scale-[1.02] hover:shadow-md hover:text-(--accent)"
              >
                <FaGithub className="w-4 h-4 text-gray-700 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">GitHub</span>
                <span className="text-sm text-(--smoke)">Projects</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfileCard;

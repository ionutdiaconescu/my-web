import ProfileCard from "./components/ProfileCard";
import OverviewSection from "./components/OverviewSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen w-full font-sans bg-(--background)">
      <main className="grid min-h-screen h-full w-full grid-cols-1 items-start justify-center gap-8 px-4 py-10 pt-24 sm:px-8 min-[1400px]:grid-cols-[0.3fr_0.9fr]">
        <aside className="flex justify-center min-[1400px]:items-start h-full w-full ">
          <ProfileCard />
        </aside>
        <section className="space-y-5">
          <OverviewSection />
          <SkillsSection />
          <WorkSection />
        </section>
      </main>
      <footer className="px-4 pb-8 text-center text-xs text-(--smoke) sm:px-8">
        © {currentYear} Ionut Diaconescu. All rights reserved.
      </footer>
    </div>
  );
}

"use client";
import AboutMe from "@/features/AboutMe";
import Introduction from "@/features/Introduction";
import Projects from "@/features/Projects";
import WorkExperience from "@/features/WorkExperience";

export default function Home() {
  return (
    <div className="dark bg-black  text-white pb-8">
      <Introduction />
      <AboutMe />
      <Projects />
      <WorkExperience />
      <p className="text-xs text-center pt-8 text-white">
        Made with <span className="text-teal-500">❤</span> by VDP
      </p>
    </div>
  );
}

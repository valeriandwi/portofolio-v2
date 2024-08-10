"use client";
import AboutMe from "@/features/AboutMe";
import Introduction from "@/features/Introduction";
import Projects from "@/features/Projects";

export default function Home() {
  return (
    <div className="dark bg-black  text-white pb-8">
      <Introduction />
      <AboutMe />
      <Projects />
    </div>
  );
}

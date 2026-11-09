import AboutMe from "@/features/AboutMe";
import Contact from "@/features/Contact";
import Introduction from "@/features/Introduction";
import Projects from "@/features/Projects";
import WorkExperience from "@/features/WorkExperience";

export default function Home() {
  return (
    <>
      <Introduction />
      <main>
        <AboutMe />
        <WorkExperience />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

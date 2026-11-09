import Reveal from "@/components/ui/reveal";
import { featuredWorks } from "@/constants/contents";
import ListProject from "./ListProject";
import SideProjects from "./SideProjects";
import TechnologyStacks from "./TechnologyStacks";

const Projects = () => {
  return (
    <>
      <section className="works wrap" id="work">
        <Reveal>
          <h2 className="h2">Featured Work</h2>
        </Reveal>
        {featuredWorks.map((work, index) => (
          <ListProject {...work} index={index + 1} key={work.title} />
        ))}
      </section>
      <SideProjects />
      <TechnologyStacks />
    </>
  );
};

export default Projects;

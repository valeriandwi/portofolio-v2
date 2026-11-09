import Image from "next/image";
import { ArrowUpRight, StackList } from "@/components/ui/icons";
import Reveal from "@/components/ui/reveal";
import { sideProjects } from "@/constants/contents";

const SideProjects = () => {
  return (
    <section className="side wrap" id="side-projects">
      <Reveal>
        <h2 className="h2">Side Projects</h2>
      </Reveal>
      <Reveal className="side__grid">
        {sideProjects.map(
          ({ label, title, description, stack, image, link }) => (
            <article className="sp" key={title}>
              <div className="sp__media">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 820px) 100vw, 40vw"
                  style={
                    image.position
                      ? { objectPosition: image.position }
                      : undefined
                  }
                />
              </div>
              <div className="sp__text">
                <span className="label">{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <StackList items={stack} />
                {link && (
                  <a
                    className="sp__link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} <ArrowUpRight />
                  </a>
                )}
              </div>
            </article>
          )
        )}
      </Reveal>
    </section>
  );
};

export default SideProjects;

import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { experiences } from "@/constants/contents";

const WorkExperience = () => {
  return (
    <section className="companies wrap" id="experience">
      <Reveal>
        <h2 className="h2">Experience</h2>
      </Reveal>
      <Reveal className="grid4">
        {experiences.map(({ period, company, role, logo }) => (
          <div className="co" key={company}>
            <div className="co__top">
              <span className="label">{period}</span>
              {"src" in logo ? (
                <span className="logo logo--img">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={logo.cropLeft ? "crop-left" : undefined}
                  />
                </span>
              ) : (
                <span className="logo" aria-hidden="true">
                  {logo.initials}
                </span>
              )}
            </div>
            <div>
              <strong>{company}</strong>
              <br />
              <span className="label">{role}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default WorkExperience;

import { TechIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/reveal";
import { skillRows } from "@/constants/contents";

const TechnologyStacks = () => {
  return (
    <section className="skills wrap" id="skills">
      <Reveal>
        <h2 className="h2">Skills</h2>
      </Reveal>
      <Reveal>
        {skillRows.map(({ title, icons, summary }) => (
          <div className="row" key={title}>
            <strong>{title}</strong>
            <span className="icons" aria-hidden="true">
              {icons.map(({ label, icon, glyph, text }) => (
                <span title={label} key={label}>
                  {icon ? <TechIcon name={icon} /> : glyph ?? text}
                </span>
              ))}
            </span>
            <span>{summary}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default TechnologyStacks;

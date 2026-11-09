import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { ownership } from "@/constants/contents";

const AboutMe = () => {
  return (
    <section className="about wrap" id="about">
      <Reveal className="split">
        <p className="label">( 01 ) About</p>
        <p className="statement">
          I take technical ownership of frontend work, from code reviews and
          performance optimization to full delivery: SIT and UAT through
          production and post-release support.
        </p>
      </Reveal>
      <div className="split">
        <Reveal className="portrait">
          <Image
            src="/valerian-cutout.webp"
            alt=""
            width={1080}
            height={1080}
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal className="about__side">
          <p className="label">What I own on a team</p>
          <div className="stats">
            {ownership.map((text, i) => (
              <div className="stat" key={text}>
                <span className="label">{String(i + 1).padStart(2, "0")}</span>
                <em>{text}</em>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;

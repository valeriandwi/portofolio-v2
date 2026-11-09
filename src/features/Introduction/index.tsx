import Image from "next/image";
import {
  ArrowRight,
  Download,
  GitHub,
  LinkedIn,
} from "@/components/ui/icons";
import { heroStats, profile } from "@/constants/contents";
import Nav from "./Nav";

const Introduction = () => {
  return (
    <header className="hero" id="top">
      <Image
        className="hero__photo"
        src="/valerian-cutout.webp"
        alt="Portrait of Valerian Dwi Purnomo"
        width={1080}
        height={1080}
        sizes="(max-width: 820px) 100vw, 68vw"
        priority
        quality={55}
      />
      <div className="grain" />
      <Nav />
      <div className="hero__body wrap">
        <h1>
          <span className="line">
            <span>Valerian</span>
          </span>
          <span className="line">
            <span>Dwi Purnomo</span>
          </span>
        </h1>
        <p className="hero__sub">
          Frontend Developer building enterprise-scale React and Next.js
          applications, from dashboards to customer platforms.
        </p>
        <div className="hero__cta">
          <a className="btn" href={profile.cv} download>
            Download CV <Download />
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch <ArrowRight />
          </a>
          <a
            className="btn btn--ghost btn--icon"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </a>
          <a
            className="btn btn--ghost btn--icon"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <div className="strip wrap">
        {heroStats.map(({ value, label, dark }) => (
          <div className={`chip${dark ? " chip--dark" : ""}`} key={label}>
            <b>{value}</b>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Introduction;

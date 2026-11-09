import { ArrowRight } from "@/components/ui/icons";
import { profile } from "@/constants/contents";

const Contact = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="foot wrap">
        <h2>Let&apos;s build something real</h2>
        <div>
          <p className="label">Contact</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </div>
        <div>
          <p className="label">Find me</p>
          <a href={profile.website}>{profile.websiteLabel}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.cv} download>
            Download CV (PDF)
          </a>
          <span className="foot__place">{profile.location}</span>
        </div>
        <div>
          <a className="btn" href={`mailto:${profile.email}`}>
            Send an email <ArrowRight />
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="legal">
          <span>{profile.name}</span>
          <a href="#top">Back to top</a>
        </div>
      </div>
      <p className="wordmark wrap" aria-hidden="true">
        <span>V</span>
        <i>++</i>
        <span>P</span>
      </p>
    </footer>
  );
};

export default Contact;

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import { BsMedium } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.linkedin && (
              <a href={social.linkedin} aria-label="linkedin" className="link link--icon">
                <LinkedInIcon />
              </a>
            )}
            {social.github && (
              <a href={social.github} aria-label="github" className="link link--icon">
                <GitHubIcon />
              </a>
            )}
            {social.language && (
              <a href={social.language} aria-label="blog" className="link link--icon">
                <LanguageIcon />
              </a>
            )}
            {social.behance && (
              <a href={social.behance} aria-label="behance" className="link link--icon">
                <BsBehance />
              </a>
            )}
            {social.medium && (
              <a href={social.medium} aria-label="medium" className="link link--icon">
                <BsMedium />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;

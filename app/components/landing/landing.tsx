import Image from "next/image";
import aboutMe from "@/public/personal_pictures/about-me.jpg";
import workExperience from "@/app/data/work-experience.json";
import { ScrollIndicator } from "./scroll-indicator";
import { SocialLinks } from "./social-links";
import { VerbStatus } from "./verb-status";
import styles from "./css/landing.module.css";

export function Landing() {
  const latestRole = [...workExperience].sort((first, second) =>
    second.startDate.localeCompare(first.startDate),
  )[0];

  return (
    <section className={styles.landing} aria-labelledby="landing-heading">
      <div className={styles.intro}>
        <h1 id="landing-heading" className={styles.heading}>
          Hi, I'm Paul<span className="heading-period">.</span>
        </h1>

        <div className={styles.portraitFrame}>
          <Image
            src={aboutMe}
            alt="Paul-Andrei Aldea"
            className={styles.portrait}
            sizes="(max-width: 700px) 200px, 232px"
            placeholder="blur"
            preload
          />
        </div>

        {latestRole && (
          <VerbStatus companyName={latestRole.companyName} jobTitle={latestRole.jobTitle} />
        )}
        <SocialLinks />
      </div>

      <ScrollIndicator />
    </section>
  );
}

import { SectionHeading } from "../section-heading/section-heading";
import { EducationEntry, type EducationData } from "./education-entry";
import styles from "./css/education.module.css";

type EducationProps = {
  education: readonly EducationData[];
};

export function Education({ education }: EducationProps) {
  return (
    <section className={styles.section} id="education" aria-labelledby="education-heading">
      <SectionHeading id="education-heading">Education</SectionHeading>

      <div className={styles.list}>
        {education.map((entry) => (
          <EducationEntry key={entry.id} education={entry} />
        ))}
      </div>
    </section>
  );
}

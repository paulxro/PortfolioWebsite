import styles from "./css/education-entry.module.css";

export type EducationData = {
  id: string;
  institution: string;
  degree: string;
  endDate: string;
  location: string;
  details: readonly { label: string; value: string }[];
};

type EducationEntryProps = {
  education: EducationData;
};

export function EducationEntry({ education }: EducationEntryProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div>
          <h3 className={styles.institution}>{education.institution}</h3>
          <p className={styles.degree}>{education.degree}</p>
        </div>

        <p className={styles.date}>
          <time>{education.endDate}</time>
          <span aria-hidden="true"> · </span>
          {education.location}
        </p>
      </header>

      <dl className={styles.details}>
        {education.details.map((detail) => (
          <div key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

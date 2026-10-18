import Image from "next/image";
import styles from "./css/project.module.css";

export type ProjectData = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  image: string;
  imageAlt: string;
  imageFit?: string;
  link: { href: string; label: string } | null;
};

type ProjectProps = {
  project: ProjectData;
};

export function Project({ project }: ProjectProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1088px) calc((100vw - 88px) / 2), 500px"
          className={project.imageFit === "cover" ? styles.coverImage : styles.containImage}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{project.category}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.technologies} aria-label="Technologies" role="list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.link && (
          <a
            className={styles.link}
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.link.label}: ${project.title} (opens in a new tab)`}
          >
            {project.link.label}
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

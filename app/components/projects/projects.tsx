import { Project, type ProjectData } from "./project";
import { SectionHeading } from "../section-heading/section-heading";
import styles from "./css/projects.module.css";

type ProjectsProps = {
  projects: readonly ProjectData[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects &amp; Papers</SectionHeading>

      <ul className={styles.grid} role="list">
        {projects.map((project) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

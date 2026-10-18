import type { ReactNode } from "react";
import styles from "./css/section-heading.module.css";

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2 id={id} className={styles.heading}>
      <span className={styles.title}>{children}</span>
    </h2>
  );
}

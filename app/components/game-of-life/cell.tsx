import styles from "./css/cell.module.css";

type CellProps = {
  isAlive: boolean;
};

export function Cell({ isAlive }: CellProps) {
  return (
    <span
      aria-hidden="true"
      className={`${styles.cell}${isAlive ? ` ${styles.alive}` : ""}`}
    />
  );
}

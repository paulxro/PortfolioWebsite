import styles from "./css/timeline-event.module.css";

export type TimelineEventData = {
  id: string;
  /** Month dates in YYYY-MM format; a null end date means Present. */
  startDate: string;
  endDate: string | null;
  jobTitle: string;
  companyName: string;
  location: string;
  descriptions: readonly string[];
};

type TimelineEventProps = {
  event: TimelineEventData;
};

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatMonth(date: string) {
  return monthFormatter.format(new Date(`${date}-01T00:00:00Z`));
}

export function TimelineEvent({ event }: TimelineEventProps) {
  return (
    <li className={styles.event}>
      <p className={styles.dates}>
        <time dateTime={event.startDate}>{formatMonth(event.startDate)}</time>
        {" - "}
        {event.endDate ? (
          <time dateTime={event.endDate}>{formatMonth(event.endDate)}</time>
        ) : (
          <span className={styles.present}>Present</span>
        )}
      </p>

      <span className={styles.rail} aria-hidden="true">
        <span className={styles.node} />
      </span>

      <article className={styles.details}>
        <h3 className={styles.company}>{event.companyName}</h3>
        <p className={styles.jobTitle}>{event.jobTitle}</p>
        <p className={styles.location}>{event.location}</p>
        <ul className={styles.descriptions}>
          {event.descriptions.map((description, index) => (
            <li key={`${event.id}-${index}`}>{description}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}

import styles from "./css/timeline.module.css";
import { TimelineEvent, type TimelineEventData } from "./timeline-event";

type TimelineProps = {
  events: readonly TimelineEventData[];
};

export function Timeline({ events }: TimelineProps) {
  const sortedEvents = [...events].sort((first, second) =>
    second.startDate.localeCompare(first.startDate),
  );

  return (
    <ol
      className={styles.timeline}
      role="list"
      aria-label="Work experience, newest first"
    >
      {sortedEvents.map((event) => (
        <TimelineEvent event={event} key={event.id} />
      ))}
    </ol>
  );
}

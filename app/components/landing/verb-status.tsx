"use client";

import { useEffect, useState } from "react";
import { verbs } from "./verbs";
import styles from "./css/verb-status.module.css";

type VerbStatusProps = {
  companyName: string;
  jobTitle: string;
};

const VERB_INTERVAL = 5_000;

export function VerbStatus({ companyName, jobTitle }: VerbStatusProps) {
  const [verbIndex, setVerbIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const selectNextVerb = () => {
      const offset = 1 + Math.floor(Math.random() * (verbs.length - 1));
      setVerbIndex((current) => (current + offset) % verbs.length);
    };

    // Randomize after hydration so the initial server and client HTML match.
    const initialId = window.setTimeout(selectNextVerb, 0);
    const intervalId = window.setInterval(() => {
      if (!document.hidden && !reducedMotion.matches) selectNextVerb();
    }, VERB_INTERVAL);

    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className={styles.status}>
      <span className={styles.terminal} aria-hidden="true">
        <span className={styles.prompt}>&gt;</span>
        <span className={styles.verb} key={verbIndex}>
          {verbs[verbIndex]}...
        </span>
        <span className={styles.cursor} />
      </span>
      <span className={styles.at} aria-hidden="true">@</span>
      <span className={styles.screenReaderOnly}>{jobTitle} at </span>
      <span className={styles.company}>{companyName}</span>
    </p>
  );
}

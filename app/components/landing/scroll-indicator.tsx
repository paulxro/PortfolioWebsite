"use client";

import { useEffect, useState } from "react";
import styles from "./css/scroll-indicator.module.css";

export function ScrollIndicator() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const updateScrollPosition = () => setIsAtTop(window.scrollY === 0);

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return (
    <div
      className={`${styles.indicator} ${isAtTop ? styles.visible : ""}`}
      aria-hidden={!isAtTop}
    >
      <span>↓</span>
    </div>
  );
}

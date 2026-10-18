import styles from "./css/social-links.module.css";

const socialLinks = [
  { href: "https://github.com/paulxro", label: "GitHub" },
  { href: "https://www.linkedin.com/in/paldea", label: "LinkedIn" },
  { href: "mailto:paldea@umich.edu", label: "paldea@umich.edu" },
];

export function SocialLinks() {
  return (
    <nav className={styles.links} aria-label="Paul's social profiles">
      {socialLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        >
          {label}
          {!href.startsWith("mailto:") && <span aria-hidden="true">↗</span>}
        </a>
      ))}
    </nav>
  );
}

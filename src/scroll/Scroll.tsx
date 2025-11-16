import { useActiveSection } from "./useActiveSection";
import "./css/Scroll.css";

const sections = ["landing", "about", "projects", "contact", "skills"];

export default function ScrollIndicator() {
  const active = useActiveSection(sections);

  return (
    <div className="scroll-indicator">
      <div className="scroll-line"></div>

      {sections.map(section => (
        <div
          key={section}
          className={`scroll-dot ${active === section ? "active" : ""}`}
          onClick={() => {
            document.getElementById(section)?.scrollIntoView({
              behavior: "smooth"
            });
          }}
        ></div>
      ))}
    </div>
  );
}

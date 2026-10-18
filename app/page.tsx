import { GameBoard } from "./components/game-of-life/game-board";
import { Landing } from "./components/landing/landing";
import { Timeline } from "./components/timeline/timeline";
import { Education } from "./components/education/education";
import { Projects } from "./components/projects/projects";
import { SectionHeading } from "./components/section-heading/section-heading";
import workExperience from "./data/work-experience.json";
import education from "./data/education.json";
import projects from "./data/projects.json";

export default function Page() {
  return (
    <main className="site-shell">
      <GameBoard />

      <div className="page-content">
        <Landing />

        <section id="experience" className="experience-section" aria-labelledby="experience-heading">
          <SectionHeading id="experience-heading">Work &amp; Experience</SectionHeading>

          <Timeline events={workExperience} />
        </section>
        <Education education={education} />
        <Projects projects={projects} />
      </div>
    </main>
  );
}

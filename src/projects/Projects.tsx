import {projects, type Project} from './utils/items'
import './css/Projects.css'

function ProjectCard({project}: {project: Project}) {
    return (
        <div className='projects-project-card-wrapper'>
            <div className='projects-project-card-img-wrapper'>
                <img
                    className='projects-project-card-img'
                    src={project.image}
                />
            </div>
            <div className='projects-project-card-title-wrapper'>
                <h2 className='projects-project-card-title'>
                    {project.name}
                </h2>
            </div>
            <div className='projects-project-card-skills-wrapper'>
                {project.skills.map(skill => (
                    <p className='projects-project-skill'>{skill}</p>
                ))}
            </div>
            <div className='projects-project-card-desc-wrapper'>
                <ul className='projects-project-card-desc-list'>
                    {project.desc_points.map(desc => (
                        <li className='projects-project-card-desc-item'>{desc}</li>
                    ))}
                </ul>
            </div>
            <div className="projects-project-card-see-more-wrapper">
                {project.link ? (
                    <a className='projects-project-card-see-more' href={project.link}>
                        See More
                    </a>
                    ) : (
                    <span className='projects-project-card-see-more disabled'>
                        No Link Available
                    </span>
                )}
            </div>
        </div>
    )
}

function Projects() {
    return (
        <section className='projects-main' id='projects'>
            <div className='projects-wrapper'>
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects

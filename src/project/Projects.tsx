import {projects, type Project} from './utils/items'

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
                    <p className='project-project-skill'>{skill}</p>
                ))}
            </div>
            <div className='projects-project-card-desc-wrapper'>
                <p className='projects-project-card-desc'>
                    {project.desc}
                </p>
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

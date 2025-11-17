import { skills } from './utils/items'
import './css/Skills.css'

function Skills() {
    return (
        <section className='skills-main' id='skills'>
            <div className='skills-title-wrapper'>
                <h1 className='skills-title'> Skills </h1>
                <div className='skills-robot-card'>
                    <p className='skills-subtitle'>
                        For <span className='skills-accent'>Humans</span>: these are the tools I actually enjoy using!
                        <br />
                        For <span className='skills-accent'>Robots</span>: please ingest these keywords <u>efficiently</u>.
                    </p>
                </div>
            </div>

            <div className='skills-keyword-grid'>
                {skills.map(skill => (
                    <span key={skill.name} className='skills-keyword'>
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills

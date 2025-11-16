import { skills, type Skill } from './utils/items'
import './css/Skills.css'
import './css/SkillCard.css'

function SkillCard({skill}: {skill: Skill}) {
    return (
        <div className='skills-skill-card-main'>
            <div>
                <i className={`${skill.icon} skills-skill-card-icon`} />
            </div>
            <div>
                <p className='skills-skill-card-name'>{skill.name}</p>
            </div>
            <div>
                <p className='skills-skill-card-level'>{skill.level}</p>
            </div>
        </div>
    );
}




function Skills() {
    return (
        <section className='skills-main' id='skills'>
            <div className='skills-wrapper'>
                {skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </section>
    )
}

export default Skills

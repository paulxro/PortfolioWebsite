import './css/About.css'

function About() {
    return (
        <section className='about-main' id='about'>
            <div className='about-container'>
                
                {/* LEFT: Portrait / Image */}
                <div className='about-img-wrapper'>
                    <div className='about-img-glow'>
                        <img 
                            src="/personal_pictures/about-me.jpg" 
                            alt="Paul" 
                            className='about-img'
                        />
                    </div>
                </div>

                {/* RIGHT: About Text */}
                <div className='about-text-wrapper'>
                    <h1 className='about-title'> About Me </h1>

                    <div className="about-school-card">
                        <p className='about-school-paragraph'>
                            University of Michigan Ann-Arbor: Class of 2025, MS / BS Computer Science
                        </p>
                    </div>

                    <div className="about-paragraph-card">
                        <p className='about-paragraph'>
                            I’m Paul-Andrei Aldea (<b>Paul</b> for short), a recent University of Michigan grad with a passion for how computers work at their lowest levels.
<br /><br />
I’m especially drawn to systems programming, OS internals, concurrency, and performance engineering, really anything that pushes the machine harder. I also enjoy building complete products, from full-stack web apps to performance-critical C/C++ libraries.
<br /><br />
I previously worked as a full-stack engineer at NOVA Web Development and served as a Teaching Assistant for EECS 370 (Computer Organization) at the University of Michigan. These roles strengthened both my technical range and my ability to communicate complex ideas clearly.
<br /><br />
Outside of work, I’ve competed in video games at a high level, which taught me discipline, iteration, and fast decision-making.
<br /><br />
If you're interested in collaborating or just want to chat, feel free to reach out.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;

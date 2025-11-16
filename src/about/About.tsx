import './css/About.css'

function About() {
    return (
        <section className='about-main' id='about'>
            <div className='about-container'>
                
                {/* LEFT: Portrait / Image */}
                <div className='about-img-wrapper'>
                    <div className='about-img-glow'>
                        <img 
                            src="/pictures/about-me.jpg" 
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
                            I’m Paul-Andrei Aldea (<b>Paul</b> for short), a recent University of Michigan grad with a deep interest 
                            in how computers work at their lowest levels. <br /><br />
                            I’m drawn to systems programming, OS internals, concurrency, and performance tuning; really anything 
                            that requires understanding the machine and pushing it a little harder.
                            At the same time, I love building real products end-to-end. Whether it’s a full-stack web app or a 
                            performance-critical library in C/C++, I focus on clarity and efficient design.<br /> <br />
                            Outside of coding, I’ve spent years playing video games competitively, which taught me a lot about discipline, 
                            iteration, and high-pressure decision-making. <br /><br />
                            If you’re interested in collaborating or just want to chat, feel free to reach out.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;

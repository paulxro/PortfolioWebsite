import './css/Landing.css'

function Landing() {
    return (
        <section className='landing-main' id='landing'>
            <div className='landing-container'>

                {/* LEFT: Text Section */}
                <div className='landing-text-wrapper'>
                    <h1 className='landing-title'>
                        Hello, I am <span className='landing-accent'>Paul</span>!
                    </h1>

                    <h2 className='landing-subtitle'>
                        Software Engineer
                    </h2>

                    <div className='landing-icon-row'>
                        <a href="mailto:paldea@umich.edu" 
                        target="_blank" 
                            className="icon-link"
                            data-tooltip="Email">
                            <i className="ri-mail-line"></i>
                        </a>

                        <a href="/resume.pdf" 
                        target="_blank" 
                            className="icon-link"
                            data-tooltip="Resume">
                            <i className="ri-file-list-3-line"></i>
                        </a>

                        <a href="https://linkedin.com/in/paldea" 
                        target="_blank" 
                            className="icon-link"
                            data-tooltip="LinkedIn">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>

                        <a href="https://github.com/paulxro" 
                        target="_blank" 
                            className="icon-link"
                            data-tooltip="GitHub">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>

                </div>


                {/* RIGHT: Image Section */}
                <div className='landing-img-wrapper'>
                    <div className='landing-img-glow'>
                        <img 
                            src="/personal_pictures/landing-me.jpg"
                            alt="Portrait"
                            className="landing-img"
                        />
                    </div>
                </div>

                <a href="#about" className="landing-scroll-indicator">
                    About Me
                </a>

            </div>
        </section>
    )
}

export default Landing

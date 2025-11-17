import './css/Contact.css'

function Contact() {
    return (
        <section className='contact-main' id='contact'>
            <div className='contact-container'>

                <div className="contact-text-wrapper">
                    <h1 className='contact-title'> Contact </h1>

                    <div className="contact-card">
                        <p className='contact-paragraph'>
                            Whether you’re reaching out about opportunities, collaboration, 
                            or just want to say hello — I’d love to hear from you.
                        </p>

                        <div className="contact-links-wrapper">
                            <a className="contact-link" href="mailto:paldea@umich.edu">
                                Email
                            </a>
                            <a className="contact-link" href="https://github.com/paulxro" target="_blank">
                                GitHub
                            </a>
                            <a className="contact-link" href="https://linkedin.com/in/paldea" target="_blank">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact

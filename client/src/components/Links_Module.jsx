import CV_PDF from '../docs/cv_updated.pdf';
import { ytc_links } from './Links';

function LinkModules() {

    return (
        <div className="align-items-md-stretch h-100 p-5 bg-light">
            <div className="col-lg-10 col-md-10 container">
                <h1 className="display-6 fw-bold">Get in touch 🤙</h1>
                <div className="row align-items-md-stretch mb-4">
                    <div className="col-md-3 mt-4">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>CV 📃</h2>
                            <p>
                                A PDF version of my CV is available below.
                                Alternatively, my experiences are also documented on LinkedIn.
                            </p>
                            <div className="btn-group">
                                <a className="btn btn-outline-light" href={CV_PDF}>CV</a>
                                <a className="btn btn-outline-light" href={ytc_links.linkedin}>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <div className="h-100 p-5 bg-light border border-dark rounded-3">
                            <h2>GitHub 💻</h2>
                            <p>
                                Check out my repositories on GitHub!
                            </p>
                            <a className="btn btn-outline-secondary" href={ytc_links.github}>GitHub</a>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <div className="h-100 p-5 rounded-3 text-light" style={{ backgroundColor: 'teal', }}>
                            <h2>Blogs ✏️</h2>
                            <p>
                                This is where I blog my jaywalking and train-spotting journeys. Have a read!
                            </p>
                            <a className="btn btn-outline-light" href={ytc_links.myMedium}>Medium</a>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            <h2>Email ✉️</h2>
                            <p>
                                Let's have a chat the traditional way!
                            </p>
                            <a className="btn btn-outline-secondary" href="mailto:chauyanniyanto@gmail.com">Let's chat</a>
                        </div>
                    </div>
                </div>
                <footer className="footer mt-auto py-3 text-center mb-auto">
                    <div className="container">
                        <span className="text-muted">A full stack web app proudly built with MERN (MongoDB, Express, React, Node)! © Yan To Chau 2022.</span>
                    </div>
                </footer>
            </div>
        </div>
    );

}

export default LinkModules;
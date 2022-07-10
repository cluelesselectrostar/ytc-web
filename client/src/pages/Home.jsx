// import { HashRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import { useRef } from 'react';

import circuit_image from '../images/circuit.webp';
import profile_image from '../images/brighton.webp';

import review_pdf from '../docs/End of Internship Review - Yanni.pdf';
import my_cover from '../images/edited-1054475.webp'

import FramedFigure from '../components/FramedFigure';
import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import scrollToTop from '../components/ScrollToTop';

//import { FullPage, Slide } from 'react-full-page';

function HomePage() {

    const aboutRef = useRef(null);

    const scrollAbout = () => aboutRef.current.scrollIntoView({
        behavior: 'smooth'
    })

    return (
        <div className="px-10">
            <PageTitle title="Home" />
            <div className="container mt-3 col-md-10">
                <div className="align-items-center align-content-center">
                    <Image style={{ width: "100%", height: 350, maxHeight: 500, overflow: "hidden", objectFit: "cover" }} src={my_cover} alt="Photo taken at North Point." fluid rounded />

                </div>
            </div>

            <div className="container col-md-10 mt-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-9">
                        <h1 className="display-5 fw-bold mt-3">Hi I am Yan To - An Engineer, Rail Enthusiast, and Jaywalker!</h1>
                        <p className="lead mt-3">
                            I am an Electrical and Electronic Engineering undergraduate at Imperial College London
                            , with an attestable portfolio of academic, work and volunteering experiences.
                            Feel free to roam around my site!
                        </p>
                        <br></br>
                        <Button variant="light" onClick={scrollAbout}>
                            <i className="bi bi-chevron-down" style={{ fontSize: "1.5em" }}></i>
                        </Button>
                    </div>
                    <div className="col-md-3 mt-3">
                        <Image src={profile_image} alt="Brighton." fluid roundedCircle />
                    </div>
                </div>
            </div>

            <div className="container col-md-10 mt-3">
                <br></br>
                <hr />
            </div>

            <div className="container py-4 col-md-10" ref={aboutRef}>
                <div className="row align-items-md-stretch">
                    <div className="col-md-7 mt-4">
                        <SquircleBox
                            appearance="teal"
                            title="I am electrifyingly inspired by...... 🔌"
                            content={
                                <div>
                                    <p className="lead mt-3">
                                        Highly sophisticated circuits and systems, particularly power electronics - it feels
                                        mesmersing to craft high-power, efficient and time-critical circuits that
                                        can be applied in everything ranging from gadgets to giant motors!
                                    </p>
                                </div>
                            }
                        />
                    </div>

                    <div className="col-md-5 align-content-center align-items-center mt-4">
                        <FramedFigure
                            image={circuit_image}
                            caption="Year 2 Circuits and Systems Lab Breadboard."
                        />
                    </div>

                    <div className="mt-4">
                        <SquircleBox
                            appearance="dark"
                            title="I have built a porfolio of professional experiences, at...... 💼"
                            content={
                                <div>
                                    <h5 className="mt-4">Majestic Engineering (Site Subcontractor)
                                        - Summer '20</h5>
                                    <p>
                                        Used AutoCAD for amending technical documents
                                        , and developed a system of VBA macros and functions for organising the site's inventory.
                                    </p>
                                    <h5 className="mt-4">Origami Labs (Team Communications Platform Startup) - Autumn '20</h5>
                                    <p>
                                        Worked with the engineering team to build the enterprise iOS app with Flutter.
                                    </p>
                                    <h5 className="mt-4">VoltShare (EV Charger Startup) - Summer '21</h5>
                                    <p>
                                        Promoted VoltShare as a thought leader amongst sustainable businesses and the EV industry,
                                        through publishing whitepaper articles and market research campaigns.
                                    </p>
                                    <a className="btn btn-outline-light" href={review_pdf}>Employer Review</a>
                                </div>
                            }
                        />
                    </div>

                    <div className="col-md-6 mt-4">
                        <SquircleBox
                            appearance="grey"
                            title="Speaking of getting my hands dirty...... 💻"
                            content={
                                <div>
                                    <p className="lead mt-3">
                                        (not literally), I work on various projects beyond my curriculum, ranging from
                                        Python mini-projects to C/C++/Arduino-powered hardware projects.
                                        More details in the projects page and GitHub.
                                    </p>
                                    <button className="btn btn-outline-secondary" type="button">
                                        <Link to="/projects" className="text-decoration-none btn-outline-secondary" onClick={scrollToTop}>
                                            Projects
                                        </Link>
                                    </button>
                                </div>
                            }
                        />
                    </div>

                    <div className="col-md-6 mt-4">
                        <SquircleBox
                            appearance="bordered-white"
                            title="Beyond all this, ...... ♥️"
                            content={
                                <div>
                                    <p className="lead mt-3">
                                        I love trains, I love skating, and I love jaywalking, and most importantly I love documenting these experiences.
                                        Afterall, "the world is my oyster"!
                                    </p>
                                    <br></br>
                                    <Row>
                                        <Col md="auto">
                                            <button className="btn btn-outline-dark" type="button">
                                                <Link to="/life" className="text-decoration-none btn-outline-light" onClick={scrollToTop}>
                                                    <h3>🛼</h3>
                                                </Link>
                                            </button>
                                        </Col>
                                        <Col md="auto">
                                            <button className="btn btn-outline-dark" type="button">
                                                <Link to="/blogs" className="text-decoration-none btn-outline-light" onClick={scrollToTop}>
                                                    <h3>📷</h3>
                                                </Link>
                                            </button>
                                        </Col>
                                        <Col md="auto">
                                            <button className="btn btn-outline-dark" type="button">
                                                <Link to="/travel" className="text-decoration-none btn-outline-light" onClick={scrollToTop}>
                                                    <h3>🚂</h3>
                                                </Link>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            }
                        />
                    </div>


                </div>
            </div>

            <br className=" mb-4"></br>
        </div >
    );

}

export default HomePage;
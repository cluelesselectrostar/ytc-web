// import { HashRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import { useRef } from 'react';

import circuit_image from '../images/circuit.webp';
import profile_image from '../images/brighton.webp';
import icra_image from '../images/ICRA.webp';
import train_image from '../images/oldoakcommon.webp';
import review_pdf from '../docs/End of Internship Review - Yanni.pdf';
import my_cover from '../images/edited-1054475.webp'

import FramedFigure from '../components/FramedFigure';
import SquircleBox from '../components/SquircleBox';
import { ytc_links } from '../components/Links';
import PageTitle from '../components/PageTitle';

import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

//import { FullPage, Slide } from 'react-full-page';

function HomePage() {

    const aboutRef = useRef(null);

    const scrollToTop = () => {
        //setExpanded(false);
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };

    const scrollAbout = () => aboutRef.current.scrollIntoView({
        behavior: 'smooth'
    })

    return (
        <div class="px-10">
            <PageTitle title="Home" />
            <div class="container mt-3 col-md-10">
                <div class="align-items-center align-content-center">
                    <Image style={{ width: "100%", height: 350, maxHeight: 500, overflow: "hidden", objectFit: "cover" }} src={my_cover} alt="Photo taken at North Point." fluid rounded />
                </div>
            </div>

            <div class="container col-md-10 mt-3">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-9">
                        <h1 class="display-5 fw-bold mt-3">Engineer, Rail Enthusiast, and Jaywalker.</h1>
                        <p class="lead mt-3">
                            Hello! I am Yan To, an Electrical and Electronic Engineering undergraduate at Imperial College London.
                            In addition to my portfolio of attestable project, work and volunteering experiences,
                            I love trains, I love photography, and I love jaywalking, and most importantly documenting these experiences. Afterall, "the world is my oyster"!
                        </p>
                        <br></br>
                        <Button variant="light" onClick={scrollAbout}>
                            <i class="bi bi-chevron-down" style={{ fontSize: "1.5em" }}></i>
                        </Button>
                    </div>
                    <div class="col-md-3 mt-3">
                        <Image src={profile_image} alt="Brighton." fluid roundedCircle />
                    </div>
                </div>

            </div>

            <div class="container col-md-10 mt-3">
                <br></br>
                <hr />
            </div>

            <div class="container py-4" ref={aboutRef}>
                <div class="row align-items-md-stretch">
                    <div class="col-md-8 mt-4">
                        <SquircleBox
                            appearance="teal"
                            title="Inspired by EEE 🔌"
                            content={
                                <div>
                                    <p>
                                        I have always been fascinated in the sophisticated circuits and systems powering our gadgets and appliances,
                                        which is why I went for EEE.
                                        I truly believe that harnessing the power of these newest technologies is the way to build a smarter,
                                        greener and more sustainable future. While I envision to work in an inter-disciplinary engineering environment,
                                        I have developed my specific interests during my course. Some of my interests include:
                                    </p>
                                    <ul>
                                        <li>Power Engineering</li>
                                        <li>Control Systems</li>
                                        <li>Robotics</li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div class="col-md-4 align-content-center align-items-center mt-4">
                        <FramedFigure
                            image={circuit_image}
                            caption="Year 2 Circuits and Systems Lab Breadboard, labelled."
                        />
                    </div>
                </div>

                <div class="row align-items-md-stretch">
                    <div class="col-md-4 mt-4">
                        <SquircleBox
                            appearance="bordered-grey"
                            title="Computing for engineering 💻"
                            content={
                                <div>
                                    <p>
                                        I code in a number of languages, ranging from Python for personal projects,
                                        to C/C++/Arduino for hardware projects. I also have experience in Verilog HDL,
                                        for FPGA laboratory work. More details in the Projects page and GitHub.
                                    </p>
                                    <button class="btn btn-outline-secondary" type="button">
                                        <Link to="/projects" class="text-decoration-none btn-outline-secondary" onClick={scrollToTop}>
                                            Projects
                                        </Link>
                                    </button>
                                </div>
                            }
                        />

                    </div>
                    <div class="col-md-8 mt-4">
                        <SquircleBox
                            appearance="dark"
                            title="Internship Experiences 💼"
                            content={
                                <div>
                                    <h5 class=" mt-4">Majestic Engineering (Construction Project Subcontractor)</h5>
                                    <p>
                                        Here I made amendments to various technical specification documents, 
                                        used AutoCAD for amending floorplan schematics, and developed a system of VBA macros and functions
                                        for organising the site's inventory, which was checked against compliance and used for submission to various stakeholders.
                                    </p>
                                    <h5 class="mt-4">Origami Labs (Hong Kong Startup)</h5>
                                    <p>
                                        Mainly worked with the engineering team on building the iOS version of the enterprise mobile app with Flutter.
                                        Also kickstarted a data analysis template for customer insights, and assisted trial and deployment for OFLO's clients.
                                    </p>
                                    <h5 class="mt-4">VoltShare (British Startup)</h5>
                                    <p>
                                        As a Business Relations Associate, I wrote a series of insightful whitepaper articles to promote VoltShare as a thought leader among sustainable businesses and the EV industry, 
                                        conducted research on market trends, and utilised these efforts to convert participants into leads or even customers.
                                    </p>
                                    <a class="btn btn-outline-light" href={review_pdf}>Employer Review</a>
                                </div>
                            }
                        />
                    </div>
                </div>

                <div class="row align-items-md-stretch">
                    <div class="col-md-7 mt-4">
                        <SquircleBox
                            appearance="teal"
                            title="Trains for life 🚂"
                            content={
                                <div>
                                    <p>
                                        Previously as a secretary and now as a chair of rail and transport society (ICRTS), my colleagues and I
                                        link enthusiastic students with the UK transport industry,
                                        hosting a range of industry talks, excursions and social events.
                                    </p>
                                    <p>
                                        Check out our Medium blog page "RailPub", where we document our exciting experiences,
                                        and random railfan trivia!
                                    </p>
                                    <p>
                                        <a class="btn btn-outline-light" style={{ width: "200px" }} href={ytc_links.ICRTSMedium}>RailPub on Medium</a>
                                    </p>
                                    <p>
                                        <a class="btn btn-outline-light" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                                    </p>
                                </div>
                            }
                        />

                    </div>
                    <div class="col-md-5 align-content-center align-items-center mt-4">
                        <div class="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
                            <Figure>
                                <Figure.Image
                                    src={train_image}
                                    fluid rounded
                                />
                                <Figure.Caption>
                                    ICRTS trip to the Crossrail Old Oak Common depot. (Spring 2020)
                                </Figure.Caption>
                            </Figure>
                        </div>
                    </div>
                </div>

                <div class="row align-items-md-stretch">
                    <div class="col-md-4 align-content-center align-items-center mt-4">
                        <FramedFigure
                            image={icra_image}
                            caption="Imperial College Robotics Academy Lego Mindstorms Workshop. (Autumn 2019)"
                        />
                    </div>
                    <div class="col-md-8 mt-4">
                        <SquircleBox
                            appearance="grey"
                            title="Volunteering 🏫"
                            content={
                                <div>
                                    <p>
                                        Serving as training manager for robotics academy (ICRA) was one of my most rewarding commitments of the year.
                                        While ICRA was previously focused on teaching schoolchildren robotics through building LEGO Mindstorms Robots,
                                        in view of coronavirus,
                                        we adapted our workshops to a remote-friendly format. I was charged with developing game-orientated learning workshops on Tynker,
                                        where schoolchildren can learn to program various games.
                                        This process not only enhanced my interest for developing games,
                                        but also increased my awareness on creating workshops with educational appeal.
                                    </p>
                                    <p>
                                        Ultimately, it's a joy working with kids, and I'm glad to be a part of their quest towards STEM!
                                    </p>
                                </div>
                            }
                        />

                    </div>
                </div>
            </div>

            <br class=" mb-4"></br>
        </div>
    );

}

export default HomePage;
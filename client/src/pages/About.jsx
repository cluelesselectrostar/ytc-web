import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'

import circuit_image from '../images/circuit.webp';
import profile_image from '../images/brighton.webp';
import icra_image from '../images/ICRA.webp';
import train_image from '../images/oldoakcommon.webp';
import review_pdf from '../docs/End of Internship Review - Yanni.pdf';

import FramedFigure from '../components/FramedFigure';
import SquircleBox from '../components/SquircleBox';

import { ytc_links } from '../components/Links';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AboutPage() {

    const scrollToTop = () => {
        setExpanded(false);
        window.scrollTo({
            top: 0, behavior: 'smooth' 
        });
    };

    const [expanded, setExpanded] = useState(false);

    return (<main>

        <div class="align-items-md-stretch h-100 p-5 bg-light rounded-3">
            <PageTitle title="About"/>
            <div class="row">
                <div class="col-md-9">
                    <h1 class="display-5 fw-bold">Where I am currently at.</h1>
                    <p class="lead">
                        I am Yan To, raised in Hong Kong
                        , and currently an Engineering undergraduate at Imperial College London.
                        In addition to my portfolio of attestable project, work and volunteering experiences,
                        I am also active in numerous student societies,
                        bringing exciting extra-curricular experiences to Imperial students.
                    </p>
                </div>
                <div class="col-md-3 align-content-center align-items-center">
                    <Image src={profile_image} alt="Brighton." fluid roundedCircle />
                </div>
            </div>
        </div>

        <div class="container py-4">
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
                                    I truly believe that harnessing the power of these newest technology is the way to build a smarter,
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
                                    While amending the installation manuals and floorpans construction project with respect to the clients' requirements.
                                    I grasped the importance of effectively communicating with various stakeholders of project.
                                    The main takeaway of this internship was the interactive process of iterating through design and specifications,
                                    and working with compliance, ensuring safe and effective completion of the project.
                                </p>
                                <h5 class="mt-4">Origami Labs (Local Startup)</h5>
                                <p>
                                    I assisted the development of the startup's iOS enterprise mobile application,
                                    and assisted their product pilot-testing and deployment.
                                    This gave me an exclusive outlook into the process of crafting a seamless solution,
                                    truly tailored to its customers, and delivered reliably to a high standard.
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
                                    Alongside my briliant colleagues at rail and transport society (ICRTS),
                                    we link enthusiastic students with the UK transport industry,
                                    hosting a range of industry talks, excursions and social events.
                                    As ICRTS' secretary, I've been actively engaged in hosting and cohosting quizzes and industry-oriented talks throughout the year,
                                    and the number of inter-university events has remarkably surpassed previous years.
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
    </main>);
}

export default AboutPage;
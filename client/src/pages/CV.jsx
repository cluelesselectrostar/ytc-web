import FramedFigure from '../components/FramedFigure';
import icra_image from '../images/ICRA.webp'; // volunteering image

import TitleBanner from '../components/TitleBanner';
import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

import review_pdf from '../docs/End of Internship Review - Yanni.pdf';
import train_image from '../images/oldoakcommon.webp';

import Figure from 'react-bootstrap/Figure';
import { ytc_links } from '../components/Links';
import image_3 from "../images/jaywalking/edited-1054347.webp";

function CVPage() {

    return (<main>

        <PageTitle title="CV" />
        <TitleBanner
            title="Curriculum Vitae 🖋"
            description="More about my (professional) course of life."
            image={image_3}
        />

        <div className="container col-md-10">
            <div className="row align-items-center justify-content-center align-items-md-stretch">
                <div className="col-md-4 align-content-center align-items-center mt-4">
                    <SquircleBox
                        appearance="grey"
                        title="Education 🎒"
                        content={
                            <div>
                                <p className="lead mt-4">
                                    Imperial College London MEng Electrical and Electronic Engineering (2019-2013)
                                </p>
                                <p>
                                    Some relevant (interesting) modules are Analogue Electronics, Semiconductor Devies,
                                    Signal Processing, Power Electronics, Control Engineering, Robotics, Embedded Systems
                                </p>
                                <div className="mt-4">
                                    <p class="lead">Po Leung Kuk Choi Kai Yau School (2007-2019)</p>
                                    <p>IBDP with English Language and Literature SL, Chinese Language and Literature SL, Math HL, Physics HL, Chemistry SL, Geography HL</p>
                                </div>
                            </div>
                        }
                    />
                </div>

                <div className="col-md-8 mt-4">
                    <SquircleBox
                        appearance="teal"
                        title="Internship Experiences 💼"
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
                                <h5 className="mt-4">Technelec (Motor Design) - Summer '21</h5>
                                <p>
                                    Designed interference-free PCBs for high speed motors in the automotive industry.
                                    Developed microcontroller software for mass production fault testing.
                                </p>
                                <a className="btn btn-outline-light" href={review_pdf}>Employer Review</a>
                            </div>
                        }
                    />
                </div>

                <div className="col-md-7 mt-4">
                    <SquircleBox
                        appearance="dark"
                        title="Rail and Transport Society 🚂"
                        content={
                            <div>
                                <p>
                                    Previously as a secretary and now as a chair of Imperial College Rail and Transport Society (ICRTS), my colleagues and I
                                    link enthusiastic students with the UK transport industry,
                                    hosting a range of industry talks, excursions and social events.
                                </p>
                                <p>
                                    Check out our Medium blog page "RailPub", where we document our exciting experiences,
                                    and random railfan trivia!
                                </p>
                                <p>
                                    <a className="btn btn-outline-light" style={{ width: "200px" }} href={ytc_links.ICRTSMedium}>RailPub on Medium</a>
                                </p>
                                <p>
                                    <a className="btn btn-outline-light" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                                </p>
                            </div>
                        }
                    />
                </div>

                <div className="col-md-5 align-content-center align-items-center mt-4">
                    <div className="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
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

                <div className="col-md-4 align-content-center align-items-center mt-4">
                    <FramedFigure
                        image={icra_image}
                        caption="Imperial College Robotics Academy Lego Mindstorms Workshop. (Autumn 2019)"
                    />
                </div>
                <div className="col-md-8 mt-4">
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

    </main >);
}

export default CVPage;
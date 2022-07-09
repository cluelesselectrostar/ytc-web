//import Figure from 'react-bootstrap/Figure';
//import { ParallaxProvider } from 'react-scroll-parallax';
//import { Parallax } from 'react-scroll-parallax';
import Image from 'react-bootstrap/Image';
import FramedFigure from '../components/FramedFigure';
import icra_image from '../images/ICRA.webp'; // volunteering image
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

import TitleBanner from '../components/TitleBanner';
import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

//import bakerloo_image from '../images/bakerlootutorial.webp';
import skatepark_image from '../images/skatepark.webp';
import streetskate_image from '../images/streetskate.webp';
import train_image from '../images/oldoakcommon.webp';

import Figure from 'react-bootstrap/Figure';
import { ytc_links } from '../components/Links';
import image_3 from "../images/jaywalking/edited-1054347.webp";

function LifePage() {

    return (<main>

        <PageTitle title="Passions" />
        <TitleBanner
            title="Living my passions ❤️‍🔥"
            description="My life beyond engineering!"
            image = {image_3}
        />

        {/* <ParallaxProvider>
                <Parallax className="custom-class" x={[200, -200]} tagOuter="figure">
                <Image src={bakerloo_image} height="300px" />
                </Parallax>
            </ParallaxProvider> */}

        <div className="container col-md-10">
            <div className="row align-items-center justify-content-center align-items-md-stretch">
                <div className="col-md-7 mt-4">
                    <SquircleBox
                        appearance="dark"
                        title="Imperial College Rail and Transport Society 🚂"
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

                <div className="col-md-12 mt-4">

                    <SquircleBox
                        appearance="teal"
                        content={
                            <div>
                                <div className="row align-items-center align-content-center">
                                    <div className="col-md-5 mt-4">
                                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <Image src={skatepark_image} fluid height="30%" rounded />
                                                </div>
                                                <div className="carousel-item">
                                                    <Image src={streetskate_image} fluid height="30%" rounded />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mt-4">
                                        <h2>Rolling with my feet 🛼</h2>
                                        <p>
                                            I started rolling skating 2 years ago when I first joined the college Skate society in Autumn 2019. Thanks to the coronavirus pandemic, I've actually spent more time street-skating and aggressive skating in skateparks.
                                        </p>
                                        <p>
                                            Today, I skate several times a month, and I cannot imagine my life without rolling on skates!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    />
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

export default LifePage;
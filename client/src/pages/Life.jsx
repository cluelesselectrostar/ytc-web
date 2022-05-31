//import Figure from 'react-bootstrap/Figure';
//import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
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

function LifePage() {

    return (<main>

        <PageTitle title="Passions" />
        <TitleBanner
            title="Living my passions ❤️‍🔥"
            description="My life beyond engineering!"
        />

        <div class="container py-4">

            {/* <ParallaxProvider>
                <Parallax className="custom-class" x={[200, -200]} tagOuter="figure">
                    <Image src={bakerloo_image} height="300px" />
                </Parallax>
            </ParallaxProvider> */}

            <div class="row align-items-md-stretch g-4">

                <SquircleBox
                    appearance="dark"
                    content={
                        <div>
                            <div class="row align-items-center align-content-center">
                                <div class="col-md-5 mt-4">
                                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <Image src={skatepark_image} fluid height="30%" rounded />
                                            </div>
                                            <div class="carousel-item">
                                                <Image src={streetskate_image} fluid height="30%" rounded />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-md-7 mt-4">
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

    </main >);
}

export default LifePage;
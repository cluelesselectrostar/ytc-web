import Figure from 'react-bootstrap/Figure';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Image from 'react-bootstrap/Image';

// import { Link } from 'react-router-dom';
// import { useState } from 'react';

import TitleBanner from '../components/TitleBanner';
import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

import bakerloo_image from '../images/bakerlootutorial.webp';
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
            <ParallaxProvider>
                <Parallax className="custom-class" x={[200, -200]} tagOuter="figure">
                    <Image src={bakerloo_image} height="300px" />
                </Parallax>
            </ParallaxProvider>

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

        </div>

    </main >);
}

export default LifePage;
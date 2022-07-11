//import Figure from 'react-bootstrap/Figure';
//import { ParallaxProvider } from 'react-scroll-parallax';
//import { Parallax } from 'react-scroll-parallax';
//import Image from 'react-bootstrap/Image';
//import FramedFigure from '../components/FramedFigure';
//import icra_image from '../images/ICRA.webp'; // volunteering image
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

import TitleBanner from '../components/TitleBanner';
//import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

//import bakerloo_image from '../images/bakerlootutorial.webp';
// import skatepark_image from '../images/skatepark.webp';
// import streetskate_image from '../images/streetskate.webp';
// import train_image from '../images/oldoakcommon.webp';

// import Figure from 'react-bootstrap/Figure';
// import { ytc_links } from '../components/Links';
import image_3 from "../images/jaywalking/edited-1054347.webp";

function LifePage() {

    return (<main>

        <PageTitle title="Passions" />
        <TitleBanner
            title="Living my passions ❤️‍🔥"
            description="My life beyond engineering!"
            image={image_3}
        />

        {/* <ParallaxProvider>
                <Parallax className="custom-class" x={[200, -200]} tagOuter="figure">
                <Image src={bakerloo_image} height="300px" />
                </Parallax>
            </ParallaxProvider> */}

        <div className="container col-md-10">
            <div className="row align-items-center justify-content-center align-items-md-stretch">
            
            </div>
        </div>

    </main >);
}

export default LifePage;
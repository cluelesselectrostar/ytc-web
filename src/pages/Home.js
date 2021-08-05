import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import my_cover from '../images/edited-1054475.webp'
import Image from 'react-bootstrap/Image'

import { ytc_links } from '../components/Links';
import PageTitle from '../components/PageTitle';


function HomePage() {

    const scrollToTop = () => {
        setExpanded(false);
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };
    const [expanded, setExpanded] = useState(false);

    return (
        <div class="px-10 py-0 text-center">
            <PageTitle title="Home" />
            <div class="container py-4">
                <div class="align-items-center align-content-center">
                    <Image src={my_cover} alt="Photo taken at North Point." fluid rounded />
                </div>
            </div>

            <h1 class="display-5 fw-bold mt-4">Engineer, Rail Enthusiast, and Jaywalker.</h1>
            <div class="col-lg-6 mx-auto container py-4">
                <p class="lead mt-4">
                    Hello! I am a Electrical and Electronic Engineering undergraduate at Imperial College London, with attestable internship and volunteering experiences. I have developed a profound interest for trains, in particular the sophisticated rolling stock traction motors, and the intricate logistics involved in the industry's operation. I also enjoy "jaywalking" and documenting these experiences. Afterall, "the world is my oyster"!
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                    <button class="btn btn-outline-secondary" type="button">
                        <Link to="/about" class="text-decoration-none btn-outline-secondary" onClick={scrollToTop}>
                            About Me
                        </Link>
                    </button>
                </div>
            </div>
            <br class=" mb-4"></br>
        </div>
    );

}

export default HomePage;
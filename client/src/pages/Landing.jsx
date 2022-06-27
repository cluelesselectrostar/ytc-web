// import { HashRouter, Switch, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import { useState } from 'react';
//import { useRef } from 'react';

import profile_image from '../images/brighton.webp';
//import my_cover from '../images/edited-1054475.webp';
import woodstock from '../images/woodstock.webp';
import cgcu_gse from '../images/cgcu_gse.webp';

//import FramedFigure from '../components/FramedFigure';
//import SquircleBox from '../components/SquircleBox';
import PageTitle from '../components/PageTitle';

import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//import { FullPage, Slide } from 'react-full-page';

function LandingPage() {

    const scrollToTop = () => {
        //setExpanded(false);
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };

    return (
        <div class="px-10">
            <PageTitle title="Landing" />

            <div class="container col-md-6">
                <Container className="mt-4">
                    <Row className="justify-content-md-center align-items-center">
                        <Col md={4}>
                            <Image src={profile_image} alt="Brighton." fluid roundedCircle />
                        </Col>
                        <Col md="auto" className="justify-content-center align-items-center mx-auto">
                            <div class="container col-md-8">
                                <h1 class="display-5 fw-bold mt-3 text-center">cluelessyanni</h1>
                                <p class="lead mt-3 text-center">
                                    Who wants to climb on a linktr.ee 🌲 when you can approach with a cool landing 🛬?
                                </p>
                                <div class="row mb-2">
                                    <Button variant="outline-primary" href="https://cluelesselectrostar.github.io/ytc-web/" style={{ fontSize: "1.2em" }}>
                                        <i class="bi bi-globe2" style={{ marginRight: "10px" }}></i>
                                        My personal website
                                    </Button>
                                </div>
                                <div class="row mb-2">
                                    <Button variant="outline-danger" href="https://www.youtube.com/channel/UCivqtQ6OQJa4rdrEmCjzGuQ/videos" style={{ fontSize: "1.2em" }}>
                                        <i class="bi bi-youtube" style={{ marginRight: "10px" }}></i>
                                        YouTube Channel
                                    </Button>
                                </div>
                                <div class="row mb-2">
                                    <Button variant="outline-warning" href="https://cluelesselectrostar.github.io/ytc-web/#/travel" style={{ fontSize: "1.2em" }}>
                                            <Image
                                                height={30}
                                                alt="Woodstock"
                                                src={woodstock}
                                                style={{ marginRight: "10px" }}
                                            />

                                        Travel with Woodstock
                                    </Button>
                                </div>
                                <div class="row mb-2">
                                    <Button variant="outline-success" href="https://cluelesselectrostar.github.io/ytc-web/#/blogs" style={{ fontSize: "1.2em" }}>
                                        <i class="bi bi-pen-fill" style={{ marginRight: "10px" }}></i>
                                        Medium Blog Friend Links
                                    </Button>
                                </div>
                                {/* <div class="row mb-2"><Button variant="outline-success" disabled>Instagram</Button></div> */}
                            </div>

                            {/* <br></br>

<Button>
<i class="bi bi-chevron-down g-4" style={{ fontSize: "1.5em" }}></i>
</Button>
<Button variant="light">
<i class="bi bi-chevron-down g-4" style={{ fontSize: "1.5em" }}></i>
</Button>
<Button variant="light">

</Button> */}
                        </Col>
                    </Row>
                    <br class="mb-4"></br>
                    <Col md="auto">
                        <a href="https://medium.com/@yannichau/running-to-be-your-next-cgcu-guildsheet-editor-933746c1e203?source=friends_link&sk=9ed5d4284560a5d6cd168a0c900c02cf">
                            <Image src={cgcu_gse} alt="CGCU+CSE." fluid />
                        </a>
                        </Col>
                </Container>
            </div>

            <br class=" mb-4"></br>
        </div >
    );

}

export default LandingPage;
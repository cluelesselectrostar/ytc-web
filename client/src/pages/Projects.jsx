import React from 'react';
import { useRef } from 'react';
// import { Component } from 'react';
// import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import Image from 'react-bootstrap/Image';

// import GetLocalProjects from '../projects/GetProjects';
import SquircleBox from '../components/SquircleBox';
import ProjectPostList from '../components/ProjectPostList';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import BouncyArrow from '../components/BouncyArrow';

import LoadingGif from '../components/LoadingGIF';
import circuit_image from '../images/circuit.webp';

import altium from '../images/icons_webp/altium-designer.webp';
import ltspice from '../images/icons_webp/ltspice.webp';
import matlab from '../images/icons_webp/matlab.webp';
import quartus from '../images/icons_webp/quartus.webp';
import solidworks from '../images/icons_webp/solidworks.webp';

import arduino from '../images/icons_webp/arduino.webp';
import platformio from '../images/icons_webp/platformio.webp';
import rpi from '../images/icons_webp/rpi.webp';
import microchip from '../images/icons_webp/microchip.webp';

import flutter from '../images/icons_webp/flutter.webp';
import nodejs from '../images/icons_webp/nodejs.webp';
import python from '../images/icons_webp/python.webp';
import react from '../images/icons_webp/react.webp';



function ProjectsPage({ projectdata }) {

    const postRef = useRef(null);

    const scrollToPost = () => postRef.current.scrollIntoView({
        behavior: 'smooth'
    })

    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    //const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (projectdata) {
            setLoaded(true);
            setPosts(projectdata);
        }
    }, [search, projectdata]);

    return (
        <main>
            <PageTitle title="Projects" />
            <TitleBanner
                title="Getting my hands dirty!"
                description={
                    <div>
                        <p className="lead">
                            Links to all the documentation and repositories of my individual and group projects!
                        </p>
                    </div>
                }
                image={circuit_image}
            />
            <div className="container col-md-10">
                <div className="row align-items-md-stretch">
                    <div className="col-md-4 mt-4">
                        <SquircleBox
                            appearance="dark"
                            title="Hardware"
                            content={
                                <div className="align-items-stretch">
                                    <div>
                                        <Row className="justify-content-md-center g-1">
                                            <Col md={2} xs={4}>
                                                <Image src={altium} fluid />
                                            </Col>
                                            <Col md={2} xs={4}>
                                                <Image src={arduino} fluid />
                                            </Col>
                                            <Col md={2} xs={4}>
                                                <Image src={platformio} fluid />
                                            </Col>
                                            <Col md={2} xs={4}>
                                                <Image src={rpi} fluid />
                                            </Col>
                                            <Col md={2} xs={4}>
                                                <Image src={microchip} fluid />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div class="mt-4">
                                        <p>
                                            I have a wealth of experience working with hardware
                                            in both in my coursework and internship projects, ranging from
                                            designing interference-free PCBs for high speed power electronics,
                                            to programming microcontrollers.
                                        </p>
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    <div className="col-md-4 mt-4">
                        <SquircleBox
                            appearance="teal"
                            title="App Development"
                            content={
                                <div>
                                    <Row className="justify-content-md-center g-1">
                                        <Col md={2} xs={4}>
                                            <Image src={flutter} fluid />
                                        </Col>
                                        <Col md={2} xs={4}>
                                            <Image src={nodejs} fluid />
                                        </Col>
                                        <Col md={2} xs={4}>
                                            <Image src={python} fluid />
                                        </Col>
                                        <Col md={2} xs={4}>
                                            <Image src={react} fluid />
                                        </Col>
                                    </Row>
                                    <p class="mt-4">
                                        These are mainly for the my own interest, such as data-processing and mobile app development.
                                        The highlight of all is of course the full stack "MERN" web-dev framework
                                        for developing this brilliant portfolio!
                                    </p>
                                </div>
                            }
                        />
                    </div>

                    <div className="col-md-4 mt-4">
                        <SquircleBox
                            appearance="bordered-grey"
                            title="Scientific Software"
                            content={
                                <div>
                                    <Row className="justify-content-md-center g-1">
                                        <Col md={2} xs={4}>
                                            <Image src={ltspice} fluid />
                                        </Col>
                                        <Col md={2} xs={4}>
                                            <Image src={matlab} fluid />
                                        </Col>
                                        <Col md={2} xs={4}>
                                            <Image src={quartus} fluid />
                                        </Col>
                                        <Col md={2} xs={4}>
                                            <Image src={solidworks} fluid />
                                        </Col>
                                    </Row>
                                    <p>
                                        Throughout my degree I have become fluent at a number of industry-relevant software:
                                        <ul>
                                            <li>LTSpice - Simulating transient behaviour of analogue circuits</li>
                                            <li>MATLAB - Modelling of control systems</li>
                                            <li>Quartus - Digital circuit simulations ad FPGA programming</li>
                                            <li>Solidworks - CAD for 3D printing</li>
                                        </ul>
                                    </p>
                                </div>
                            }
                        />
                    </div>


                </div>
            </div>

            <div onClick={scrollToPost} ref={postRef}>
                <BouncyArrow />
            </div>

            {loaded ? (
                <div className="album mt-4">
                    <div className="container">
                        <ProjectPostList posts={posts} />
                    </div>
                </div>
            ) : (
                <LoadingGif/>
            )
            }

        </main>
    );
}

export default ProjectsPage;